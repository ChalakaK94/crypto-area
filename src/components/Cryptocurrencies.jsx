import {useGetCryptosQuery} from "../services/cryptoApi";
import {useState} from "react";
import {Card, Col, Row} from "antd";
import {Link} from "react-router-dom";
import millify from "millify";

export function Cryptocurrencies() {
    const {data: cryptoList, isFetching} = useGetCryptosQuery();

    const [cryptos, setCryptos] = useState(cryptoList?.data?.coins);

    console.log({cryptos})
    return (
        <>
            <Row gutter={[32,32]} className='crypto-card-container'>
                {cryptos.map((currency)=>(
                    <Col xs={24} key={currency.uuid} lg={6} className='crypto-card'>
                        <Link to={`/crypto/${currency.uuid}`}>
                            <Card title={`${currency.rank} ${currency.name}`}
                                  extra={<img className='crypto-image'  src={currency.iconUrl}/> }
                                  hoverable>
                                <p>Price: {millify(currency.price)}</p>
                                <p>Market Cap: {millify(currency.marketCap)}</p>
                                <p>Daily Change: {millify(currency.change)}</p>
                            </Card>
                        </Link>
                    </Col>
                ))}
            </Row>
        </>
    )
}