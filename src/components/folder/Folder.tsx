import React from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import File, { IFile } from "../file/File.tsx";
import "./Folder.scss";

export interface IFolderData {
  name: string;
  type: string;
  children?: (IFolderData | IFile)[];
}

export interface IFolderProps {
  folderData: IFolderData;
}

export interface IFolderState {
  expand: boolean;
}

class Folder extends React.Component<IFolderProps, IFolderState> {
  constructor(props: IFolderProps) {
    super(props);
    this.state = {
      expand: false,
    };

    this.handleExpand = this.handleExpand.bind(this);
  }

  handleExpand() {
    this.setState({ expand: !this.state.expand });
  }

  render() {
    const { folderData } = this.props;
    const isFolder = folderData.type === "FOLDER";
    const getIcon = () => {
      if (isFolder) {
        return this.state.expand ? <RemoveIcon /> : <AddIcon />;
      }
      return "";
    };

    return (
      <div className="folder">
        {isFolder ? (
          <>
            <div className="folder-name">
              {getIcon()}
              <span onClick={this.handleExpand}>{folderData.name}</span>
            </div>
            {this.state.expand &&
              folderData?.children?.map((f) => (
                <div style={{ paddingLeft: 15 }} key={f.name}>
                  <Folder folderData={f} />
                </div>
              ))}
          </>
        ) : (
          <File name={folderData.name} />
        )}
      </div>
    );
  }
}

export default Folder;
