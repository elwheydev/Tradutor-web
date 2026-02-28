<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Loop Abrir Páginas</title>
</head>
<body>

    <h2>Clique para abrir várias páginas</h2>
    
    <!-- Botão que inicia a ação -->
    <button id="startLoop">Iniciar Loop</button>

    <script>
        document.getElementById('startLoop').addEventListener('click', function() {
            // URL que será aberta
            const url = "elwheydev.github.io/tradutor/"; // <-- Substitua pelo seu site
            const totalPaginas = 50; // <-- Quantas vezes abrir

            for (let i = 0; i < totalPaginas; i++) {
                // window.open(url, '_blank') abre em uma nova aba
                window.open(url, '_blank');
            }
        });
    </script>

</body>
</html>
