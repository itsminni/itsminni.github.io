import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";

const output = resolve(dirname(fileURLToPath(import.meta.url)), "../dist");

for (const language of ["it", "en"]) {
  const path = language === "it" ? "/" : "/en/";
  const html = await readFile(join(output, language === "it" ? "index.html" : "en/index.html"), "utf8");

  test(`${path} delivers portfolio content in the initial HTML`, () => {
    assert.match(html, new RegExp(`<html lang="${language}">`));
    assert.match(html, /<div id="root" data-prerendered="true">/);
    for (const text of ["Gabriele", "Mininni.", "Giano", "Fyre", "ArtHint", "Telegram", "Computer Science", "SORINT", "QUIX", "minni.code@icloud.com"]) {
      assert.ok(html.includes(text), `Missing portfolio content: ${text}`);
    }
    for (const id of ["main", "projects", "about", "background", "activities", "contact"]) {
      assert.ok(html.includes(`id="${id}"`), `Missing section: ${id}`);
    }
    assert.doesNotMatch(html, /<!--app-html-->|\/src\/main\.tsx/);
  });

  test(`${path} includes project details and unchanged benchmark values without JavaScript`, () => {
    assert.equal((html.match(/<details class="project-fallback">/g) ?? []).length, 2);
    for (const text of ["BiLSTM", "Meteotrentino", "ERA5", "ImputeFormer", "SwiftUI", "Kotlin", "Appwrite"]) {
      assert.ok(html.includes(text), `Missing project detail: ${text}`);
    }
    for (const value of ["20.4", "22.2", "48.3", "15.7", "17.1", "45.3"]) {
      assert.ok(html.includes(`${language === "it" ? value.replace(".", ",") : value}%`));
    }
  });

  test(`${path} links to both static language versions`, () => {
    assert.match(html, /href="\/" lang="it"/);
    assert.match(html, /href="\/en\/" lang="en"/);
    const description = html.match(/<meta\s+name="description"\s+content="([^"]+)"/)[1];
    const socialDescription = html.match(/<meta\s+property="og:description"\s+content="([^"]+)"/)[1];
    assert.equal(description, socialDescription);
    assert.ok(description.startsWith(language === "it" ? "Studente al primo anno" : "First-year Computer Science student"));
  });

  test(`${path} references existing local assets and pages`, async () => {
    assert.match(html, /<script[^>]+src="\/assets\/[^"]+\.js"/);
    assert.match(html, /<link[^>]+href="\/assets\/[^"]+\.css"/);
    const references = new Set([...html.matchAll(/(?:href|src)="(\/[^"#]*)"/g)].map(match => match[1]));
    for (const reference of references) {
      const file = reference.endsWith("/") ? `${reference}index.html` : reference;
      await access(join(output, file));
    }
  });
}
