import Generator = require("yeoman-generator");

interface IAnswers {
  name: string;
  author: string;
  title: string;
  language: string;
  publisher: string;
}
export default class extends Generator {
  answers: IAnswers = {
    name: '',
    author: '',
    title: '',
    language: '',
    publisher: '',
  };

  constructor(args, opts) {
    super(args, opts);

    // Next, add your custom code
    this.option("babel"); // This method adds support for a `--babel` flag
  }

  async prompting() {
    this.answers = await this.prompt([
      {
        type: "input",
        name: "name",
        message: "Your project name",
        default: this.appname, // Default to current folder name
      },
      {
        type: "input",
        name: "author",
        message: "Book author?",
      },
      {
        type: "input",
        name: "title",
        message: "Book title?",
      },
      {
        type: "input",
        name: "language",
        message: "Book language?",
      },
      {
        type: "input",
        name: "publisher",
        message: "Book publisher?",
      },
    ]);
  }

  writing() {
    const options = this.answers;
    this.fs.copyTpl(
      this.templatePath('content.opf'),
      this.destinationPath('public/content.opf'),
      options
    );
  }
};
