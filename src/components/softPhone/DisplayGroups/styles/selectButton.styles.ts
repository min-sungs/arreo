import styled from 'styled-components'

export const Inquiry = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: .6rem;
  margin-bottom: 1rem;

  .allSearchGroup {
    position: relative;

		border: 1px solid transparent;
    &.active {
			border-color: #ADC1F4;
			border-radius: 1.5rem 1.5rem 0 0;
      .allSearchBox {
        display: block;
				border: 1px solid #ADC1F4;
			}

      > button {
        border-radius: 1.5rem 1.5rem 0 0;

        svg {
          transform: rotate(180deg);
        }
      }
    }

    > button {
      display: flex;
      justify-content: space-between;
      align-items: center;
      /* gap: 2.8rem; */
      padding: .6rem 1rem;
      background: #fff;
      box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.03);
      color: #5b5b5c;
      font-size: 1.2rem;
      font-weight: 600;
      border-radius: 1.5rem;
      min-width: 12rem;
    }

    .allSearchBox {
      z-index: 11;
      display: none;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      min-width: 100%;
      background: #fff;
			/* border-radius: 0 0 1.5rem 1.5rem; */
      /* ::before {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background: rgba(25, 25, 25, 0.70);
        box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.10);
      } */

      // overflow 스크롤
      ::-webkit-scrollbar {
        width: .4rem;
        background-color: transparent;
        border-radius: 40px;
        margin: 20px 0;
        scrollbar-gutter: both;
      }

      ::-webkit-scrollbar-thumb {
        background: #98999A;
        border-radius: 40px;
        /* margin: 12rem 0; */
        padding: 1rem;
        background-clip: padding-box;
      }

      li {
        position: relative;
        margin-bottom: 1rem;

        :last-child {
          margin-bottom: 0;
        }

        button {
          width: 100%;
          padding: 1rem;
          color: #5b5b5c;
          background: transparent;
          font-size: 1.2rem;
          font-weight: 500;
          text-align: left;
          overflow-x: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }

        :hover {
          background: #F6F7FE;
          font-weight: 700;

          /* ::after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 2.5px;
            height: 100%;
            background: #0D42E5;
          } */

          button {
            font-weight: 700;
          }
        }
      }
    }
  }

  .flexWrap {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: .6rem;
  }

  .contactGroup {
    z-index: 10;
    position: relative;
		border: 1px solid transparent;

    &.active {
			border: 1px solid #ADC1F4;
			border-radius: 1.5rem 1.5rem 0 0;
      .contactBox {
        display: block;
				border: 1px solid #ADC1F4;
      }

      .contactBtn {
        border-radius: 1.5rem 1.5rem 0 0;
				border-color: #ADC1F4;
				border-bottom-color: #D6D6DC;
      }

      svg {
        transform: rotate(180deg);
      }
    }

    .contactBtn {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1.6rem;
      padding: .6rem 1.2rem;
      background: #FEFEFF;
      box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.03);
      color: #191919;
			font-weight: 600;
      font-size: 1.2rem;
      font-weight: 600;
      border-radius: 1.5rem;
      min-width: 9rem;
			svg{
				path{
					fill: #98999A;
				}
			}
    }

    .contactBox {
      z-index: 3;
      display: none;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      min-width: 100%;
      background: #fff;
			border: 0;

      /* ::before {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background: rgba(25, 25, 25, 0.70);
        box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.10);
      } */

      li {
        position: relative;

        :hover {
          background: #F6F7FE;
          font-weight: 700;

          /* ::after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 2.5px;
            height: 100%;
            background: #0D42E5;
          } */

          button {
            font-weight: 700;
          }
        }

        :last-child {
          margin-bottom: 0;
        }

        button {
          width: 100%;
          padding: 1rem;
          color: #5b5b5c;
          background: transparent;
          font-size: 1.2rem;
          font-weight: 500;
          text-align: left;
          overflow-x: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }
    }
  }

  .searchBox {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.2rem;

    input {
      width: 10rem;
      background: #FEFEFF;
      border: 1px solid #fff;
      padding: .5rem 3.4rem .5rem 1.5rem;
      border-radius: 50px;
			color: #98999A;
			box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.03);

      :focus {
        outline: none;
      }

      ::placeholder {
				font-weight: 400;
        color: #98999A;
      }
    }

    button {
      position: absolute;
      right: 1rem;
      width: 17px;
      height: 18px;
      padding: 0;
    }

  }
`

