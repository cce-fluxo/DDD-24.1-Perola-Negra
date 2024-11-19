"use client";


import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import PopupConfirm from "./PopupProduto"; // Importe o PopupConfirm aqui
import { Field, Formik, Form, ErrorMessage, useFormik, useFormikContext } from "formik";
import * as Yup from 'yup';
import api from "@/services/axios";

interface Props{
    idProduto: number,
}

const formatCurrency = (value: string) => {
  const numericValue = parseFloat(value.replace(/[^\d]/g, '')) / 100;
  return numericValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};


const EditarProdutoForm: React.FC = ({idProduto}) => {
  const [qtd_estoque, setQtd_estoque] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [popupVisible, setPopupVisible] = useState(false);

  const [produtos, setProdutos] = React.useState([]);

  async function getProdutos() {
    const response = await api.get(`/produto/${idProduto}`);
    setProdutos(response.data);
    console.log(response.data);
  }

  React.useEffect(() => {
    getProdutos();
  }, []);


  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };


  const handleSelect = (value: string) => {
    setQtd_estoque(value);
    setDropdownOpen(false);
  };


  const router = useRouter();
  const isSubmiting = useFormikContext();


  return (
    <div className="mb-4 bg-neutral-100 px-5 py-12 rounded-3xl w-full flex flex-col md:flex-row justify-between md:justify-evenly gap-5 md:gap-5">
      <div className="flex justify-center items-center w-full md:w-1/3">
        <label htmlFor="image-upload" className="cursor-pointer">
          <div className="relative w-48 h-48 bg-neutral-200 rounded-lg">
            {!selectedImage && (
              <Image
                src="/images/uploadproduto.png"
                alt="Upload"
                draggable={false}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            )}
            {selectedImage && (
              <Image
                src={selectedImage}
                alt="Selected"
                draggable={false}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            )}
          </div>
        </label>
        <input
          id="image-upload"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
        />
      </div>


      <Formik
        initialValues={{
          nome: '',
          descricao: '',
          preco: '',
          qtd_estoque: '',
          tamanho: 'não tem',
          cor: 'não tem',
          img_principal: "https://example.com/imagem-principal.jpg",
          favoritado: false,
        }}
        validationSchema={Yup.object({
          nome: Yup.string().required('Insira o nome do produto'),
          descricao: Yup.string().required('Insira a descrição do produto'),
          preco: Yup.string().required('Insira o preço do produto'),
          qtd_estoque: Yup.number().typeError('Quantidade deve ser um número').required('Insira a quantidade do produto').min(1, 'Quantidade mínima é 1'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          console.log(isSubmiting);
          router.push('/produtos/categoria-1');
          setSubmitting(false);
        }}
      >
        {({ values, setFieldValue, isSubmitting }) => (
          <Form className="flex flex-col md:flex-row gap-4">
            <div className="flex flex-col justify-between w-full mmmmd:w-1/4 text-neutral-600">
              <Field
                name="nome"
                type="text"
                className="text-lg font-medium placeholder:text-neutral-600 underline underline-offset-4 decoration-zinc-200 bg-transparent focus:outline-none"
                placeholder={produtos.nome}
              />
              <ErrorMessage name="nome" component="div" className="text-red-500" />


              <Field
                name="descricao"
                as="textarea"
                className="underline underline-offset-4 decoration-zinc-200 py-4 bg-transparent placeholder:text-neutral-600 focus:outline-none resize-none"
                placeholder={produtos.descricao}
                rows={3}
              />
              <ErrorMessage name="descricao" component="div" className="text-red-500" />


              <Field
                name="preco"
                type="text"
                value={values.preco}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setFieldValue("preco", formatCurrency(e.target.value))
                }
                className="flex items-center font-medium bg-transparent placeholder:text-neutral-600 focus:outline-none"
                placeholder={produtos.preco}
              />
              <ErrorMessage name="preco" component="div" className="text-red-500" />


              <Field
                name="qtd_estoque"
                type="number"
                className="flex items-center font-medium bg-neutral-200 placeholder:text-neutral-600 focus:outline-none"
                placeholder={produtos.qtd_estoque}
              />
              <ErrorMessage name="qtd_estoque" component="div" className="text-red-500" />
            </div>


            <div className="flex flex-row gap-5 mt-6 md:mt-0 place-self-end">
              <button
                type="button"
                onClick={() => setPopupVisible(true)}
                className="py-1 px-6 bg-neutral-500 text-white rounded-xl"
              >
                Excluir
              </button>
              <button type="submit" className="py-1 px-6 bg-neutral-500 text-white rounded-xl">
                Salvar
              </button>
            </div>
          </Form>
        )}
      </Formik>


      {popupVisible && (
        <PopupConfirm
          onClose={() => setPopupVisible(false)}
          onConfirm={() => {
            setPopupVisible(false);
          }}
        />
      )}
    </div>
  );
};

export default EditarProdutoForm;
