import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

interface props {
  togglePopUp: () => void;
}

const PopUpDesconto: React.FC<props> = ({ togglePopUp }) => {
  const today = new Date();
  const formattedToday = today.toISOString().slice(0, 10); // Data no formato YYYY-MM-DD

  const validationSchema = Yup.object().shape({
    desconto: Yup.string().required("A porcentagem é obrigatória"),
    data: Yup.string()
      .required("A data é obrigatória")
      .test(
        "valid-date",
        "Data inválida: A data de expiração não pode ser anterior à data atual ou fora do formato dia/mês/ano",
        function (value) {
          if (!value) return true;
          const inputDate = new Date(value.split("/").reverse().join("-"));
          return inputDate >= new Date(formattedToday);
        }
      ),
  });

  const handlePercentageChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setFieldValue: any
  ) => {
    let value = e.target.value.replace("%", "");
    const numValue = Number(value);
    setFieldValue("desconto", numValue <= 100 ? numValue + "%" : "100%");
  };

  const handleDateChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setFieldValue: any
  ) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 2) value = value.slice(0, 2) + "/" + value.slice(2);
    if (value.length > 5) value = value.slice(0, 5) + "/" + value.slice(5);
    setFieldValue("data", value);
  };

  return (
    <div className="fixed z-50 inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-white rounded-xl w-[45vw] pl-20 py-8 pr-10">
        <div className="flex flex-row w-full h-full">
          <div className="flex-auto">
            <Formik
              initialValues={{ desconto: "", data: "" }}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                console.log("Valores do formulário:", values);
                togglePopUp();
              }}
            >
              {({ values, setFieldValue }) => (
                <Form className="flex flex-col items-center h-full">
                  <div className="flex-auto font-bold text-3xl pb-4">
                    DESCONTO
                  </div>
                  <div className="flex-auto text-center text-lg pb-8">
                    Ao salvar, eu concordo que estarei aplicando esse desconto
                    em todos os produtos da loja até o dia estipulado.
                  </div>
                  <div className="flex flex-row flex-auto gap-16 pb-4">
                    <div>
                      <Field
                        name="desconto"
                        placeholder="0%"
                        value={values.desconto}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          handlePercentageChange(e, setFieldValue)
                        }
                        className="bg-gray-300 w-56 rounded font-bold text-3xl text-center p-2"
                      />
                      <ErrorMessage
                        name="desconto"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                      <div className="flex flex-row flex-auto gap-16 pb-8">
                        <div className="w-56 text-center text-lg">
                          Porcentagem
                        </div>
                      </div>
                    </div>
                    <div>
                      <Field
                        name="data"
                        placeholder="dd/mm/yyyy"
                        value={values.data}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          handleDateChange(e, setFieldValue)
                        }
                        className="bg-gray-300 w-56 rounded font-bold text-3xl text-center p-2"
                      />
                      <ErrorMessage
                        name="data"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                      <div className="flex flex-row flex-auto gap-16 pb-8">
                        <div className="w-56 text-center text-lg">
                          Data de Expiração
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="bg-black flex-auto w-[7vw] text-white rounded-3xl p-2"
                  >
                    Salvar
                  </button>
                </Form>
              )}
            </Formik>
          </div>
          <div>
            <button
              title="Cancelar"
              type="button"
              onClick={togglePopUp}
              className='p-5 bg-[url("/icons/iconeX.png")] bg-no-repeat bg-center'
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUpDesconto;
