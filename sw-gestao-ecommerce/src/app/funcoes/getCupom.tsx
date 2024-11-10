import api from "@/services/axios";

async function getCupom () {
    try {
      const response = await api.get("/cupom");
      return response.data;
  
    } catch (error:any) {
      console.log("deu errado men: ", error.response.data);
      return [];
    }
  }

  export default getCupom;