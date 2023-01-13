Exercícios - permissões
1-Crie a pasta unix_tests_permissions e navegue até ela.
2-Rode o comando ls -l e veja quais as permissões dos arquivos.
3-Crie o arquivo arquivo_teste.txt.
4-Mude a permissão do arquivo arquivo_teste.txt para que todas as pessoas usuárias possam ter acesso à leitura e escrita, e verifique se está correto com o comando ls -l;
5-Resultado esperado: -rw-rw-rw- 1 ana ana 1860 ago 13 11:39 arquivo_teste.txt
6-Tire a permissão de escrita do arquivo arquivo_teste.txt para todas as pessoas usuárias, verifique se está correto com o comando ls -l;

Resultado esperado: -r--r--r-- 1 ana ana 1860 ago 13 11:39 arquivo_teste.txt
7-Volte à permissão do arquivo arquivo_teste.txt para a listada inicialmente utilizando o comando chmod 644 arquivo_teste.txt.

Resultado esperado: -rw-r--r-- 1 ana ana 1860 ago 13 11:39 arquivo_teste.txt


Exercícios - processos & jobs
1-Liste todos os processos.
2-Agora use o comando sleep 30 &.
3-Use a listagem de processos para encontrar o PID do processo que está executando o comando sleep 30 e termine a sua execução (mate o processo).
4-Execute novamente o comando sleep 30, mas agora sem o &. Depois, faça com que ele continue executando em background.
5-Crie um processo em background que rode o comando sleep por 300 segundos.
6-Crie mais dois processos que rodem o comando sleep por 200 e 100 segundos, respectivamente.
Você deve criá-los em foreground (sem usar o &) e suspendê-los (apertando ctrl+z) após cada um começar a executar.
7-Verifique que apenas o processo sleep 300 está em execução com o comando jobs. Suspenda a execução desse processo.
Você vai precisar trazer o processo para foreground (fg) e suspendê-lo (ctrl+z), ou enviar um sinal.
8-Retome a execução do processo sleep 100 em background com o comando bg.
9-Termine a execução de todos os processos sleep (mate os processos).



