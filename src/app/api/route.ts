import { NextResponse } from "next/server";
import path from "path";
import { promises as fs } from "fs";
import { Project } from "@/types/projects";

//carrega dados de um arquivo json
export async function GET(_request: Request) {
  //Encontre o caminho absoluto do diretório json
  const jsonDirectory = path.join(process.cwd(), "json");
  //Leia o arquivo de dados json projects.json
  const fileContents = await fs.readFile(
    jsonDirectory + "/projects.json",
    "utf8",
  );
  //Retorna o conteúdo do arquivo de dados no formato JSON
  const jsonDatas = JSON.parse(fileContents) as { projects: Project[] };
  //reordenar os valores do final para o inicio
  jsonDatas.projects.sort((a, b) => b.id - a.id);
  //corta o array para pagination
  return NextResponse.json(jsonDatas.projects, { status: 200 });
}
