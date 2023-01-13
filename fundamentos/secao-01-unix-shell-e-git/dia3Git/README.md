Chegou a hora de praticar os seus conhecimentos sobre o Git!

Para isso, você vai criar um novo diretório no seu computador e realizar algumas modificações 🤩

1-Crie uma pasta no seu computador;
2-Acesse a pasta que você acabou de criar;
3-Inicie o versionamento com o comando git init;
4-Abra a pasta no VSCode com o comando code .;
5-Crie um arquivo chamado README.md;
6-Adicione o arquivo novo em staging e realize um commit. Por exemplo: git add . e git commit -m "Descreva a alteração realizada";
7-Crie uma nova branch com o comando git checkout -b. Por exemplo: git checkout -b adiciona-readme;
8-Faça uma alteração no README.md e depois realize um novo commit. Por exemplo: git add . e git commit -m "Alterando o README"
9-Retorne para a branch main, em seguida realize o merge das alterações com o comando git merge nome-da-branch. Por exemplo: git merge adiciona-readme.
Agora que você já criou a pasta e mergeou as alterações, vamos avançar e criar novas branches!

10-Acesse a branch main e crie uma branch nova chamada atualiza-readme;
11-Acesse a branch atualiza-readme e crie um arquivo chamado infos.txt;
12-Adicione as alterações em staging e realize um commit;
13-Adicione seu nome e sobrenome no arquivo infos.txt;
14-Adicione novamente as alterações em staging e realize um commit;
15-Crie uma branch nova a partir da branch atualiza-readme. A nova branch deve se chamar adiciona-infos;
16-Acesse a branch adiciona-infos e utilize sua criatividade para escrever o passo a passo de como o versionamento funciona no README.md. Por exemplo: “O primeiro passo é ter uma pasta versionada e criar um estrutura inicial e fazemos isso utilizando o comando git init. O segundo passo é criar uma branch nova com o comando git branch nome-da-branch ou git checkout -b nome-da-branch“, etc. Você também pode utilizar esse momento para escrever e responder as dúvidas que voc6e ainda tem sobre versionamento.
17-Adicione as alterações em staging, realize o commit;
18-Volte para a branch atualiza-readme e realize o merge das alterações feitas na branch adiciona-infos;
19-Retorne para a branch main e realize o merge das alterações.