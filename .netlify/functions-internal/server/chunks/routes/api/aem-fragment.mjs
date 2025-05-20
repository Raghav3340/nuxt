import { d as defineEventHandler } from '../../_/nitro.mjs';
import { readFileSync } from 'fs';
import { join } from 'path';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';

const aemFragment = defineEventHandler(() => {
  const filePath = join(process.cwd(), "public", "fragments", "rides-landing.html");
  return readFileSync(filePath, "utf-8");
});

export { aemFragment as default };
//# sourceMappingURL=aem-fragment.mjs.map
