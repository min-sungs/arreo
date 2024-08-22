import styled from "styled-components";

export const QAContainer = styled.div`

	.Bulletin{
		.subjectGroup{
			h2{
				width: 5%;
				border-right: 0;
				padding: 0.8rem 1.2rem;
			}
			.subject{
				width: 85%;
				margin-left: 0;
			}
			.dateGroup{
				width: 8rem;
			}
			@media screen and (max-width:1040px){
				justify-content: space-between;
				> *{
					padding: 1rem;
				}
				h2{
					width: 3rem;
					padding: 0.6rem 1rem;
					border-bottom: 0;
				}
				.subject{
					order: 3;
					width: calc(100%);
				}
				.dateGroup{
					width: calc(100% - 9rem);
				}
			}
		}
	}
	.Bulletin.active{
		.subject{
			position: relative;
		}
	}

	ol{
		> li{
			> ul{
				/* border-top: 0; */
				li{
					padding: 1.4rem 3rem 1.4rem calc(5% + 3rem);
				}
			}
		}
		@media screen and (max-width:1040px){
			li{
				ul{
					border-top: 1px solid #F8F9FD;
					li{
						padding: 1rem;
					}
				}
			}
		}
	}
`

