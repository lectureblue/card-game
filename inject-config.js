// Vercel 등 배포 시 환경 변수로 config.js 생성 (실제 키는 저장소에 올리지 않음)
const fs = require('fs');
const path = require('path');

const url = process.env.SUPABASE_URL || '';
const key = process.env.SUPABASE_ANON_KEY || '';

const content = `// Generated at build time - do not commit
window.SUPABASE_URL = ${JSON.stringify(url)};
window.SUPABASE_ANON_KEY = ${JSON.stringify(key)};
`;

fs.writeFileSync(path.join(__dirname, 'config.js'), content, 'utf8');
console.log('config.js created from environment variables');
