import {Response} from "express";

// Send json response

interface ISendResponse {
  data : any;
  code ?: string;
  msg : string;
  errors ?: any[];
}

interface ISendResponseProps extends ISendResponse {
  res : Response;
  status : number;
}

const sendResponse = (props : ISendResponseProps) => {
  const dataSendResponse : ISendResponse = {
    data: props.data,
    code: props.code,
    msg : props.msg
  }

  if (props.errors)
    dataSendResponse.errors = props.errors;

  return props.res.status(props.status)
    .send(dataSendResponse);
};

export default sendResponse;