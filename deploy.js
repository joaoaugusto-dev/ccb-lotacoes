const { execSync } = require('child_process');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite a mensagem do commit: ', (mensagem) => {
  try {
    execSync('git add .', { stdio: 'inherit' });
    execSync(`git commit -m "${mensagem}"`, { stdio: 'inherit' });
    execSync('git push origin main', { stdio: 'inherit' });
    console.log('✅ Deploy concluído com sucesso!');
  } catch (err) {
    console.error('❌ Erro ao executar o deploy:', err.message);
  } finally {
    rl.close();
  }
});