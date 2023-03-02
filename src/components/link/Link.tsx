import React from "react";
import { useContext } from "react";
import { Context } from "../../App";

export const Link = ({ className, href, children }: any) => {
    const { setUrl } = useContext(Context);

    const onClick = (event:any) => {
      setUrl(href)
      // if ctrl or meta key are held on click, allow default behavior of opening link in new tab
      if (event.metaKey || event.ctrlKey) {
        return;
      }
  
      // prevent full page reload
      event.preventDefault();
      // update url
      // window.history.pushState({}, "", href);
  
      // communicate to Routes that URL has changed
      const navEvent = new PopStateEvent('popstate');
      window.dispatchEvent(navEvent);
    };
  
    return (
      <a className={className} href={href} onClick={onClick}>
        {children}
      </a>
    );
}
