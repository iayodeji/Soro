import { readFileSync, statSync } from "node:fs"
import { join } from "node:path"

const buildDirectory = ".next"
const manifestPath = join(buildDirectory, "server", "app", "page_client-reference-manifest.js")
const source = readFileSync(manifestPath, "utf8")
const assignment = 'globalThis.__RSC_MANIFEST["/page"] = '
const start = source.indexOf(assignment)

if (start === -1) {
  throw new Error("Could not find the home-page client manifest. Run `npm run build` first.")
}

const json = source.slice(start + assignment.length).trim().replace(/;$/, "")
const manifest = JSON.parse(json)
const entryJavaScript = Object.values(manifest.entryJSFiles).flat()
const entryCss = Object.values(manifest.entryCSSFiles)
  .flat()
  .map((entry) => entry.path)
const initialAssets = [...new Set([...entryJavaScript, ...entryCss])]
const initialBytes = initialAssets.reduce((total, asset) => total + statSync(join(buildDirectory, asset)).size, 0)
const budgetBytes = 160 * 1024
const clientModuleSource = JSON.stringify(manifest.clientModules)
const forbiddenClientModules = ["framer-motion", "@supabase/ssr", "@supabase/supabase-js", "nigerian_universities"]
const unexpectedModules = forbiddenClientModules.filter((moduleName) => clientModuleSource.includes(moduleName))

if (unexpectedModules.length > 0) {
  throw new Error(`Heavy modules reached the home-page client bundle: ${unexpectedModules.join(", ")}`)
}

if (initialBytes > budgetBytes) {
  throw new Error(
    `Home-page initial assets are ${(initialBytes / 1024).toFixed(1)} KB, over the ${(budgetBytes / 1024).toFixed(0)} KB budget.`,
  )
}

console.log(
  `Performance budget passed: ${(initialBytes / 1024).toFixed(1)} KB raw across ${initialAssets.length} home-page CSS/JS assets.`,
)
