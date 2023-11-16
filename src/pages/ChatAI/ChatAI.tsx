import React from 'react';
import './styles/chatai.styles.css';
import ChatAIS1Container from './containers/ChatAIS1Container';
import ChatAIS2Container from './containers/ChatAIS2Container';
import ChatAIS3Container from './containers/ChatAIS3Container';
import ChatAIS4Container from './containers/ChatAIS4Container';
import ChatAIS5Container from './containers/ChatAIS5Container';
import ChatAIS6Container from './containers/ChatAIS6Container';
import ChatAIS7Container from './containers/ChatAIS7Container';
import FooterContainer from 'src/pages/Footer/containers/FooterContainer';
import ProductS8Container from 'src/pages/Product/containers/ProductS8Container';
import useProductStore from '@store/zustand/productZustand';
type Props = {};

const ChatAI = (props: Props) => {
	const { chataiExplore } = useProductStore();
	return (
		<div className='chatai'>
			<ChatAIS1Container />
			<ChatAIS2Container />
			<ChatAIS3Container />
			<ChatAIS4Container />
			<ChatAIS5Container />
			<ChatAIS6Container />
			<ChatAIS7Container />
			<ProductS8Container exploreType={chataiExplore} />
			<FooterContainer />
		</div>
	);
};

export default ChatAI;
