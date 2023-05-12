export async function obterTodosCursos() {

    const response = await fetch('/api/cursos');
    return await response.json();
}

export async function criarCurso(data) {

    const response = await fetch('/api/cursos/inserir/', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({"nome": data})
      })
    return await response.json();
}
