import * as React from "react";

export interface IAbbildungProps{
    src: string;
    name: string;
    style?: React.CSSProperties;
    className?: string;
    imgStyle?: React.CSSProperties;
}

export class Abbildung extends React.Component<IAbbildungProps>{
    public render() {
        return(
            <div className={this.props.className} style={{display: "flex", flexDirection: "column", textAlign: "center", ...this.props.style}}>
                <img style={{width: "100%", ...this.props.imgStyle}} src={this.props.src}/>
                <i>{this.props.name}</i>
            </div>
        )
    }
}