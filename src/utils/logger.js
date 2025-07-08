const logger = {
  info: (data) => {
    console.log("INFO:", data);
  },
  error: (data) => {
    console.error("ERROR:", data);
  },
  warn: (data) => {
    console.warn("ALERTA:", data);
  }
};

export default logger