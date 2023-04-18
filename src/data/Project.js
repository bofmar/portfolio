export default class Project {
  constructor(id, name, desc, imgPath, liveLink, codeLink, stack) {
    this.id = id;
    this.name = name;
    this.desc = desc;
    this.imgPath = imgPath;
    this.liveLink = liveLink;
    this.codeLink = codeLink;
    this.stack = stack;
  }
}
