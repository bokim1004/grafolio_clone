import React, { Component } from "react";
import { Link } from "react-router-dom";
import UrlDownloadBtn from "./UrlDownloadBtn";
import "./DiscoverCardViewItem.scss";

class DiscoverCardViewItem extends Component {
  render() {
    const {
      wallpaper_id,
      wallpaperSrc,
      profileImgSrc,
      subject,
      name,
      downloadNum,
    } = this.props;
    return (
      <li>
        <Link
          to="/"
          style={{
            backgroundImage: `url(${wallpaperSrc})`,
          }}
        />
        <div className="slideInfo">
          <h6>{subject}</h6>
          <div className="box">
            <span className="userInfo">
              <span
                className="imgWrap"
                style={{
                  backgroundImage: `url(${profileImgSrc})`,
                }}
              ></span>
              <em>{name}</em>
            </span>
            <span className="dwnload">
              다운로드
              <em>{downloadNum}</em>
            </span>
          </div>
          <UrlDownloadBtn wallpaper_id={wallpaper_id} />
        </div>
      </li>
    );
  }
}

export default DiscoverCardViewItem;