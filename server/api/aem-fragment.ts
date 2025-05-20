// server/api/aem-fragment.ts
import { readFileSync } from 'fs'
import { join } from 'path'

export default defineEventHandler(() => {
  const filePath = join(process.cwd(), 'public', 'fragments', 'rides-landing.html')
  return readFileSync(filePath, 'utf-8')
})
