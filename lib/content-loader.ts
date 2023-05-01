import fs from "fs";
import path from "path";

const contentDir = "content/";
const contentExt = ".json";

export const fullContentDir = (folder: string) =>
	path.join(process.cwd(), `${contentDir}${folder}`);

export function listContents({ folder }: { folder: string }) {
	const wd = fullContentDir(folder);
	const fileNames = fs.readdirSync(wd);

	const data = fileNames.map((file) => readFileContents(wd, file));

	return data.sort((a, b) => {
		if (a.date < b.date) {
			return 1;
		} else {
			return -1;
		}
	});
}

export const readFile = (wd: string, file: string) =>
	readFileContents(fullContentDir(wd), `${file}.json`);

export function readFileContents(wd: string, file: string) {
	const fullPath = path.join(wd, file);
	const fileContents = fs.readFileSync(fullPath, "utf8");
	const json = JSON.parse(fileContents);

	return { slug: file.replace(/\.json$/, ""), ...json };
}
