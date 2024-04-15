import React from "react";
export interface IFile {
  name: string;
  mime: string;
  type: string;
}

export interface IFileProps {
  name: string;
}

class File extends React.Component<IFileProps> {
  render() {
    const { name } = this.props;

    return <span>{name}</span>;
  }
}

export default File;
