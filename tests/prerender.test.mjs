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
    for (const text of ["Gabriele", "Mininni", "Giano", "Fyre", "ArtHint", "Telegram", "Computer Science", "SORINT", "QUIX", "minni.code@icloud.com"]) {
      assert.ok(html.includes(text), `Missing portfolio content: ${text}`);
    }
    assert.doesNotMatch(html, /Mininni\./);
    for (const label of ["01 / PROGETTI", "02 / CHI SONO", "03 / PERCORSO", "04 / ALTRE ATTIVITÀ", "05 / CONTATTI", "01 / PROJECTS", "02 / ABOUT", "03 / BACKGROUND", "04 / OTHER ACTIVITIES", "05 / CONTACT"]) {
      assert.ok(!html.includes(label), `Unexpected numbered section label: ${label}`);
    }
    assert.doesNotMatch(html, /[→↗⇢⤴↑]/);
    for (const id of ["main", "projects", "about", "background", "activities", "contact"]) {
      assert.ok(html.includes(`id="${id}"`), `Missing section: ${id}`);
    }
    assert.doesNotMatch(html, /<!--app-html-->|\/src\/main\.tsx/);
  });

  test(`${path} includes project details and the Giano 2.0 evaluation without JavaScript`, () => {
    assert.equal((html.match(/<details class="project-fallback">/g) ?? []).length, 2);
    for (const text of ["BiLSTM", "Meteotrentino", "ERA5", "ImputeFormer", "SwiftUI", "Kotlin", "Appwrite"]) {
      assert.ok(html.includes(text), `Missing project detail: ${text}`);
    }
    const giano = html.split('id="project-details-giano"')[1]?.split("</details>")[0];
    assert.ok(giano, "Missing Giano project details");
    const fyre = html.split('id="project-details-fyre"')[1]?.split("</details>")[0];
    assert.ok(fyre, "Missing Fyre project details");
    for (const [details, count] of [[giano, 4], [fyre, 3]]) {
      const highlights = details.match(/<ul class="dialog-list">([\s\S]*?)<\/ul>/)?.[1];
      assert.ok(highlights, "Missing project highlights list");
      assert.equal((highlights.match(/<li>/g) ?? []).length, count);
    }
    for (const [value, unit] of [["1.894", "°C"], ["12.573", "%"], ["4.358", "hPa"], ["0.112", "mm"]]) {
      const formatted = language === "it" ? value.replace(".", ",") : value;
      assert.ok(giano.includes(`${formatted} ${unit}`), `Missing evaluation value: ${formatted} ${unit}`);
    }
    assert.match(giano, /<dd>432<\/dd>/);
    assert.match(giano, /<dd>16<\/dd>/);
    assert.ok(giano.includes("https://github.com/itsminni/giano/releases/tag/v2.0.0"));
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
