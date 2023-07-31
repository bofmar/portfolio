export default class Project {
	id;
	name;
	desc;
	imgPath;
	liveLink;
	codeLink;
	stack;
  constructor(id: number, name: string, desc: string, imgPath: string, liveLink: string, codeLink: string, stack: Array<string>) {
    this.id = id;
    this.name = name;
    this.desc = desc;
    this.imgPath = imgPath;
    this.liveLink = liveLink;
    this.codeLink = codeLink;
    this.stack = stack;
  }
}
