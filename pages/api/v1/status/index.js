function status(request, response) {
  response.status(200).json({ chave: "SÃO ACIMA DA MÉDIA" });
}

export default status;
