
import {render} from '@testing-library/react'
import { GifItem } from '../../components';



describe('Pruebas en GiftItem', () => {
    const title="Saitama";
    const url="https://Saitama";
    test('debe de hacer match con el snapshot', () => {
       const {container} =render(<GifItem title={title} url={url}/>)
       expect(container).toMatchSnapshot();
    });
});
