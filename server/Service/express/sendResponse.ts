import { Response } from "express";

// Send json response

interface ISendResponse {
  data: any;
  code?: string;
  msg: string;
  errors?: any[];
}

interface ISendResponseProps extends ISendResponse {
  res: Response;
  status: number;
}

// later : improve that
const sendResponseLog = (res: Response, status: number) => {
  let msg = (status > 399) ? "error" : "success";
}

const sendResponse = (props: ISendResponseProps) => {
  const dataSendResponse: ISendResponse = {
    data: props.data,
    code: props.code,
    msg: props.msg
  }

  if (props.errors)
    dataSendResponse.errors = props.errors;

  sendResponseLog(props.res, props.status)

  return props.res.status(props.status)
    .send(dataSendResponse);
};

export default sendResponse;