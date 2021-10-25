import React from "react";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import "react-notifications/lib/notifications.css";
import copyToClipboard from "copy-to-clipboard";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import Button from "@mui/material/Button";
import JSONPretty from "react-json-pretty";
import "./jsonStyle.css";
import { Container, PColor, FormLabelCustom } from "./styles";
import { ContainerRow, ContainerFlexWidth } from "../styles";

function RequestJson({
  dataRequest,
  url,
  urlGateway,
  label,
  textButton,
  type,
  ...rest
}) {
  function handleCopyToClipboard() {
    const dataRequestJson = JSON.stringify({ ...dataRequest, url });
    const textToCopy = type === "url" ? urlGateway : dataRequestJson;
    copyToClipboard(textToCopy);
    const textToNotification = type === "url" ? "Copied URL" : "JSON Copied";
    NotificationManager.success(textToNotification, "", 1000);
  }

  const IconButtonMain = type === "url" ? OpenInNewIcon : ContentCopyIcon;

  function handleOpenUrlNewWindow() {
    window.open(urlGateway);
  }

  function handleButtonAction() {
    if (type === "url") {
      handleOpenUrlNewWindow();
    } else {
      handleCopyToClipboard();
    }
  }

  return (
    <Container {...rest}>
      <ContainerRow
        style={{ alignItems: "center", paddingTop: 10, marginBottom: 10 }}
      >
        <ContainerFlexWidth widthPercent={50}>
          <FormLabelCustom>{label}</FormLabelCustom>
        </ContainerFlexWidth>
        <ContainerFlexWidth widthPercent={50}>
          <Button
            endIcon={<IconButtonMain />}
            onClick={() => handleButtonAction()}
            style={{ width: "100%", textTransform: "none" }}
            variant="contained"
          >
            {textButton}
          </Button>
        </ContainerFlexWidth>
        {type === "url" && (
          <ContainerFlexWidth
            widthPercent={50}
            style={{ marginLeft: 20, maxWidth: 140 }}
          >
            <Button
              endIcon={<ContentCopyIcon />}
              onClick={() => handleCopyToClipboard()}
              style={{
                width: "100%",
                textTransform: "none",
                background: "#fff",
              }}
              variant="outlined"
            >
              Copy URL
            </Button>
          </ContainerFlexWidth>
        )}
      </ContainerRow>

      <NotificationContainer />

      {dataRequest && (
        <JSONPretty id="json-pretty" data={{ ...dataRequest, url }} />
      )}

      {urlGateway && <PColor color="#ffff80">{urlGateway}</PColor>}
    </Container>
  );
}

export default RequestJson;
