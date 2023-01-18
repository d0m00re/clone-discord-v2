// Send json response
const sendResponse = (res: any, statut: number, data: any, msg: any, success: boolean, code: string = "0x42") => {
  return res.status(statut)
    .send({
      statut: statut,
      res: msg,
      success: success,
      data: data,
      code: code
    });
};

export default sendResponse;