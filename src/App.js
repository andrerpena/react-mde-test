import * as React from "react";
import ReactMde, {commands} from "react-mde";
import * as Showdown from "showdown";
import "react-mde/lib/styles/css/react-mde-all.css";

const listCommands = [
    {
        commands: [
            commands.orderedListCommand,
            commands.unorderedListCommand,
            commands.checkedListCommand
        ]
    }
]

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "**Hello world!!!**"
        };
        this.converter = new Showdown.Converter({
            tables: true,
            simplifiedAutoLink: true,
            strikethrough: true,
            tasklists: true
        });
    }

    handleValueChange = (value) => {
        this.setState({value});
    };

    render() {
        return (
            <div className="container">
                <ReactMde
                    onChange={this.handleValueChange}
                    value={this.state.value}
                    generateMarkdownPreview={markdown =>
                        Promise.resolve(this.converter.makeHtml(markdown))}
                    commands={listCommands}
                />
            </div>
        );
    }
}
