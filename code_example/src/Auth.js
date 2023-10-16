import {useLocation} from "react-router-dom";
import { useEffect } from "react";
import "./Auth.css";

function serializeArray(arr) {
  let str = arr.map(function (element) {
    return encodeURIComponent(element);
  });
  return str.join("+");
};

function serialize(obj) {
  let str = [];
  for (let p in obj)
    if (obj.hasOwnProperty(p)) {
      if (Array.isArray(obj[p])) {
        str.push(encodeURIComponent(p) + "=" + serializeArray(obj[p]));
      } else {
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
      }
    }
  return str.join("&");
};

function generateFinalUrl(baseUrl, queryParams) {
  let finalUrl = baseUrl + "?" + serialize(queryParams);
  return finalUrl;
};

const Auth = (props) => {
  let finalUrl = generateFinalUrl(props.baseUrl, props.queryParams);
  const search = useLocation().search;
  useEffect(() => {
    const authCode = new URLSearchParams(search).get('code');
    if (authCode) {
      document.getElementById("token").innerHTML = "Your auth code is";

      if (!document.getElementById("access_token")) {
        const box = document.createElement("div");
        box.className = "box center";
        box.id = "access_token";
        document.body.appendChild(box);
      }

      document.getElementById("access_token").innerHTML = "<code>" + authCode + "</code>";
      if (!document.getElementById("copybtn")) {
        const copybutton = document.createElement("button");
        copybutton.id = "copybtn";
        copybutton.innerText = "Copy";
        copybutton.onclick = function() {
          navigator.clipboard.writeText(authCode);
        };
        document.body.appendChild(copybutton);
      }
    }
  });

  return (
    <p id="token" className="center">
      <a href={finalUrl}>
        Click here to get your auth code.
      </a>
    </p>
  );
};

export default Auth;