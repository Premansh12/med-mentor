#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const packageRoot = path.join(__dirname, '..');
const targetRoot = process.cwd();

// Helper to copy directory recursively
function copyDirSync(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDirSync(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// Helper to copy single file safely
function copyFileSyncSafe(src, dest) {
  const destDir = path.dirname(dest);
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }
  if (!fs.existsSync(dest)) {
    fs.copyFileSync(src, dest);
    return true;
  }
  return false;
}

console.log('\x1b[36m%s\x1b[0m', '🏥 med-mentor workspace initializer starting...');

try {
  // 1. Install local workspace directories
  const dirsToCreate = ['lessons', 'learning-records', 'assets'];
  for (const dir of dirsToCreate) {
    const fullPath = path.join(targetRoot, dir);
    if (!fs.existsSync(fullPath)) {
      fs.mkdirSync(fullPath, { recursive: true });
      console.log(`📁 Created directory: ./${dir}`);
    }
  }

  // 2. Install workspace root files from templates
  const missionFormat = path.join(packageRoot, 'formats', 'MISSION-FORMAT.md');
  const resourcesFormat = path.join(packageRoot, 'formats', 'RESOURCES-FORMAT.md');
  
  const missionDest = path.join(targetRoot, 'MISSION.md');
  const resourcesDest = path.join(targetRoot, 'RESOURCES.md');
  const notesDest = path.join(targetRoot, 'NOTES.md');

  if (copyFileSyncSafe(missionFormat, missionDest)) {
    console.log('📝 Created: ./MISSION.md');
  } else {
    console.log('⚠️  Skipped: ./MISSION.md (already exists)');
  }

  if (copyFileSyncSafe(resourcesFormat, resourcesDest)) {
    console.log('📝 Created: ./RESOURCES.md');
  } else {
    console.log('⚠️  Skipped: ./RESOURCES.md (already exists)');
  }

  if (!fs.existsSync(notesDest)) {
    fs.writeFileSync(notesDest, '# Study Notes\n\nAdd your medical study notes, clinical pearl reminders, and feedback here.\n');
    console.log('📝 Created: ./NOTES.md');
  }

  // 3. Install the custom Claude skill to .agents/skills/med-mentor
  const skillTargetDir = path.join(targetRoot, '.agents', 'skills', 'med-mentor');
  console.log(`⚡ Installing Claude skill to .agents/skills/med-mentor...`);
  
  // Copy SKILL.md
  copyFileSyncSafe(path.join(packageRoot, 'SKILL.md'), path.join(skillTargetDir, 'SKILL.md'));
  
  // Copy references and formats subdirectories
  copyDirSync(path.join(packageRoot, 'references'), path.join(skillTargetDir, 'references'));
  copyDirSync(path.join(packageRoot, 'formats'), path.join(skillTargetDir, 'formats'));

  console.log('\x1b[32m%s\x1b[0m', '✅ Success! med-mentor workspace and skill initialized successfully.');
  console.log('\n\x1b[33m💡 What to do next:\x1b[0m');
  console.log('1. Open your Claude Code agent in this directory.');
  console.log('2. Claude will automatically detect the custom workspace skill.');
  console.log('3. Ask Claude: "Quiz me on cardiology" or "Help me study Megaloblastic Anemia" to begin!');

} catch (error) {
  console.error('\x1b[31m%s\x1b[0m', '❌ Initialization failed:', error.message);
  process.exit(1);
}
