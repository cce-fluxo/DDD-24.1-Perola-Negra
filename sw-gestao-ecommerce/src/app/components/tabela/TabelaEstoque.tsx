"use client";

import React, { useState } from 'react';
import MenuCheckBox from '../MenuCheckEstoque/MenuCheckBox';
import PopupAdd from '../PopupAdd';
import PopupDelete from '../PopupDelete';
import PopupEdit from '../PopupEdit';

function TabelaEstoque() {
  const [showPopup, setShowPopup] = useState(false);
  const [popupAction, setPopupAction] = useState('');

  const handlePopup = (action: string) => {
    setPopupAction(action);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleConfirmPopup = () => {
    console.log(`Ação confirmada: ${popupAction}`);
    setShowPopup(false);
  };

  return (
    <div className="h-full flex flex-col">
    <table className="w-full text-2xl text-center bg-[#F2F2F2] border-collapse rounded-t-2xl overflow-y-auto">
    {/* a1n --> elemento da linha 1 coluna n, sendo n a última linha ou coluna, sendo a (elemento Header), sendo b (elemento das células) */}
    <thead className="sticky top-0 bg-[#BDBDBD] h-[7vh] text-base text-white z-20">
      <tr>
        <th className="font-semibold border-none bg-[#BDBDBD] rounded-tl-2xl">Produtos</th> {/* a11 */}
        <th className="font-semibold border-none bg-[#BDBDBD]">Tamanhos</th>
        <th className="font-semibold border-none bg-[#BDBDBD] w-[23vw]">Cores</th>
        <th className="font-semibold border-none bg-[#BDBDBD]">Quantidade</th>
        <th className="font-semibold bg-[#BDBDBD] rounded-tr-2xl">Opções</th> {/* a1n */}
      </tr>
    </thead>
      
    <tbody>

          <tr> {/*Inicio Linha*/}
            <td className="py-5 bg-[#F2F2F2] border-l-0">{/**Foto+Nome Produto*/}
              <div className='h-[12vh] flex justify-center gap-2'>
                <div className= 'rounded-lg lg:w-[7vw] xl:w-[6vw] bg-[#BDBDBD]' >{/**Foto do produto */}
                  
                </div>
                <div className='flex items-center text-left font-medium'>{/**Nome do Produto*/}
                  Blusa <br></br>decotada V
                </div>
              </div>
              
            </td> {/* b11 */}
            <td className="bg-[#F2F2F2]">
              <MenuCheckBox nome='M' isTamanho></MenuCheckBox>{/**Menu para tamanhos*/}
            </td>
            <td className="py-5 bg-[#F2F2F2]">
              <MenuCheckBox nome='Amarelo' isCor></MenuCheckBox>{/**Menu para Cores*/}
            </td>
            <td className="py-5 px-4 bg-[#F2F2F2]">20</td>
            <td className="py-5 px-4 border-r-0 bg-[#F2F2F2]">

              <div className='flex justify-center items-center w-[60%] mx-auto'>{/**Icones */}
                  <button
                    onClick={() => handlePopup('adicionar')} 
                    className="bg-[url('/images/iconeMais.png')] bg-no-repeat bg-center bg-contain w-[3vw] h-[3vh]"
                  ></button>
                  <button 
                    onClick={() => handlePopup('editar')}
                    className="bg-[url('/images/iconeEditar.png')] bg-no-repeat bg-center bg-contain w-[3vw] h-[3vh] "
                  ></button>
                  <button 
                  onClick={() => handlePopup('excluir')}
                  className="bg-[url('/images/iconeExcluir.png')] bg-no-repeat bg-center bg-contain w-[3vw] h-[3vh]"></button>
              </div>
            </td> {/* b1n */}
          </tr> {/* Fim Linha*/}

          <tr> {/*Inicio Linha*/}
            <td className="py-5 bg-[#F2F2F2] border-l-0">{/**Foto+Nome Produto*/}
              <div className='h-[12vh] flex justify-center gap-2'>
                <div className= 'rounded-lg lg:w-[7vw] xl:w-[6vw] bg-[#BDBDBD]' >{/**Foto do produto */}
                  
                </div>
                <div className='flex items-center text-left font-medium'>{/**Nome do Produto*/}
                  Blusa <br></br>decotada V
                </div>
              </div>
              
            </td> {/* b11 */}
            <td className="bg-[#F2F2F2]">
              <MenuCheckBox nome='M' isTamanho></MenuCheckBox>{/**Menu para tamanhos*/}
            </td>
            <td className="py-5 bg-[#F2F2F2]">
              <MenuCheckBox nome='Amarelo' isCor></MenuCheckBox>{/**Menu para Cores*/}
            </td>
            <td className="py-5 px-4 bg-[#F2F2F2]">20</td>
            <td className="py-5 px-4 border-r-0 bg-[#F2F2F2]">

              <div className='flex justify-center items-center w-[60%] mx-auto'>{/**Icones */}
                   <button className="bg-[url('/images/iconeMais.png')] bg-no-repeat bg-center bg-contain w-[3vw] h-[3vh]"></button>
                   <button className="bg-[url('/images/iconeEditar.png')] bg-no-repeat bg-center bg-contain w-[3vw] h-[3vh] "></button>
                   <button className="bg-[url('/images/iconeExcluir.png')] bg-no-repeat bg-center bg-contain w-[3vw] h-[3vh]"></button>
              </div>
            </td> {/* b1n */}
          </tr> {/* Fim Linha*/}

          <tr> {/*Inicio Linha*/}
            <td className="py-5 bg-[#F2F2F2] border-l-0">{/**Foto+Nome Produto*/}
              <div className='h-[12vh] flex justify-center gap-2'>
                <div className= 'rounded-lg lg:w-[7vw] xl:w-[6vw] bg-[#BDBDBD]' >{/**Foto do produto */}
                  
                </div>
                <div className='flex items-center text-left font-medium'>{/**Nome do Produto*/}
                  Blusa <br></br>decotada V
                </div>
              </div>
              
            </td> {/* b11 */}
            <td className="bg-[#F2F2F2]">
              <MenuCheckBox nome='M' isTamanho></MenuCheckBox>{/**Menu para tamanhos*/}
            </td>
            <td className="py-5 bg-[#F2F2F2]">
              <MenuCheckBox nome='Amarelo' isCor></MenuCheckBox>{/**Menu para Cores*/}
            </td>
            <td className="py-5 px-4 bg-[#F2F2F2]">20</td>
            <td className="py-5 px-4 border-r-0 bg-[#F2F2F2]">

              <div className='flex justify-center items-center w-[60%] mx-auto'>{/**Icones */}
                   <button className="bg-[url('/images/iconeMais.png')] bg-no-repeat bg-center bg-contain w-[3vw] h-[3vh]"></button>
                   <button className="bg-[url('/images/iconeEditar.png')] bg-no-repeat bg-center bg-contain w-[3vw] h-[3vh] "></button>
                   <button className="bg-[url('/images/iconeExcluir.png')] bg-no-repeat bg-center bg-contain w-[3vw] h-[3vh]"></button>
              </div>
            </td> {/* b1n */}
          </tr> {/* Fim Linha*/}

          <tr> {/*Inicio Linha*/}
            <td className="py-5 bg-[#F2F2F2] border-l-0">{/**Foto+Nome Produto*/}
              <div className='h-[12vh] flex justify-center gap-2'>
                <div className= 'rounded-lg lg:w-[7vw] xl:w-[6vw] bg-[#BDBDBD]' >{/**Foto do produto */}
                  
                </div>
                <div className='flex items-center text-left font-medium'>{/**Nome do Produto*/}
                  Blusa <br></br>decotada V
                </div>
              </div>
              
            </td> {/* b11 */}
            <td className="bg-[#F2F2F2]">
              <MenuCheckBox nome='M' isTamanho></MenuCheckBox>{/**Menu para tamanhos*/}
            </td>
            <td className="py-5 bg-[#F2F2F2]">
              <MenuCheckBox nome='Amarelo' isCor></MenuCheckBox>{/**Menu para Cores*/}
            </td>
            <td className="py-5 px-4 bg-[#F2F2F2]">20</td>
            <td className="py-5 px-4 border-r-0 bg-[#F2F2F2]">

              <div className='flex justify-center items-center w-[60%] mx-auto'>{/**Icones */}
                   <button className="bg-[url('/images/iconeMais.png')] bg-no-repeat bg-center bg-contain w-[3vw] h-[3vh]"></button>
                   <button className="bg-[url('/images/iconeEditar.png')] bg-no-repeat bg-center bg-contain w-[3vw] h-[3vh] "></button>
                   <button className="bg-[url('/images/iconeExcluir.png')] bg-no-repeat bg-center bg-contain w-[3vw] h-[3vh]"></button>
              </div>
            </td>
          </tr> {/* Fim Linha*/}

          <tr> {/*Inicio Linha*/}
            <td className="py-5 bg-[#F2F2F2] border-l-0">{/**Foto+Nome Produto*/}
              <div className='h-[12vh] flex justify-center gap-2'>
                <div className= 'rounded-lg lg:w-[7vw] xl:w-[6vw] bg-[#BDBDBD]' >{/**Foto do produto */}
                  
                </div>
                <div className='flex items-center text-left font-medium'>{/**Nome do Produto*/}
                  Blusa <br></br>decotada V
                </div>
              </div>
              
            </td> {/* b11 */}
            <td className="bg-[#F2F2F2]">
              <MenuCheckBox nome='M' isTamanho></MenuCheckBox>{/**Menu para tamanhos*/}
            </td>
            <td className="py-5 bg-[#F2F2F2]">
              <MenuCheckBox nome='Amarelo' isCor></MenuCheckBox>{/**Menu para Cores*/}
            </td>
            <td className="py-5 px-4 bg-[#F2F2F2]">20</td>
            <td className="py-5 px-4 border-r-0 bg-[#F2F2F2]">

              <div className='flex justify-center items-center w-[60%] mx-auto'>{/**Icones */}
                   <button className="bg-[url('/images/iconeMais.png')] bg-no-repeat bg-center bg-contain w-[3vw] h-[3vh]"></button>
                   <button className="bg-[url('/images/iconeEditar.png')] bg-no-repeat bg-center bg-contain w-[3vw] h-[3vh] "></button>
                   <button className="bg-[url('/images/iconeExcluir.png')] bg-no-repeat bg-center bg-contain w-[3vw] h-[3vh]"></button>
              </div>
            </td> {/* b1n */}
          </tr> {/* Fim Linha*/}

          <tr> {/*Inicio Linha*/}
            <td className="py-5 bg-[#F2F2F2] border-l-0">{/**Foto+Nome Produto*/}
              <div className='h-[12vh] flex justify-center gap-2'>
                <div className= 'rounded-lg lg:w-[7vw] xl:w-[6vw] bg-[#BDBDBD]' >{/**Foto do produto */}
                  
                </div>
                <div className='flex items-center text-left font-medium'>{/**Nome do Produto*/}
                  Blusa <br></br>decotada V
                </div>
              </div>
              
            </td> {/* b11 */}
            <td className="bg-[#F2F2F2]">
              <MenuCheckBox nome='M' isTamanho></MenuCheckBox>{/**Menu para tamanhos*/}
            </td>
            <td className="py-5 bg-[#F2F2F2]">
              <MenuCheckBox nome='Amarelo' isCor></MenuCheckBox>{/**Menu para Cores*/}
            </td>
            <td className="py-5 px-4 bg-[#F2F2F2]">20</td>
            <td className="py-5 px-4 border-r-0 bg-[#F2F2F2]">

              <div className='flex justify-center items-center w-[60%] mx-auto'>{/**Icones */}
                   <button className="bg-[url('/images/iconeMais.png')] bg-no-repeat bg-center bg-contain w-[3vw] h-[3vh]"></button>
                   <button className="bg-[url('/images/iconeEditar.png')] bg-no-repeat bg-center bg-contain w-[3vw] h-[3vh] "></button>
                   <button className="bg-[url('/images/iconeExcluir.png')] bg-no-repeat bg-center bg-contain w-[3vw] h-[3vh]"></button>
              </div>
            </td> {/* b1n */}
          </tr> {/* Fim Linha*/}

      </tbody>
    </table>
      {showPopup && popupAction === 'adicionar' && (
        <PopupAdd
          onConfirm={handleConfirmPopup}
          onClose={handleClosePopup}
        />
      )}
      {showPopup && popupAction === 'editar' && (
        <PopupEdit
          onConfirm={handleConfirmPopup}
          onClose={handleClosePopup}
        />
      )}
      {showPopup && popupAction === 'excluir' && (
        <PopupDelete
          onConfirm={handleConfirmPopup}
          onClose={handleClosePopup}
        />
      )}
    </div>
  );
}

export default TabelaEstoque;