import {useGetCryptosQuery} from "../services/cryptoApi";
import {useEffect, useState} from "react";
import {Card, Col, Input, Row} from "antd";
import {Link} from "react-router-dom";
import millify from "millify";

export function Cryptocurrencies({simplified}) {
    const count = simplified ? 10 :100

    const {data: cryptoList, isFetching} = useGetCryptosQuery(count);

    const [cryptos, setCryptos] = useState([]);

    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        const filteredData = cryptoList?.data?.coins.filter((coin)=> coin.name.toLowerCase().includes(searchTerm.toLowerCase()));

        setCryptos(filteredData)
    }, [cryptoList,searchTerm]);

    if (isFetching) return 'Loading...'
    return (
        <>
            {!simplified && (
                <div className='search-crypto'>
                    <Input placeholder='Search Crypto' onChange={(e)=> setSearchTerm(e.target.value)}/>
                </div>
            )}

            <Row gutter={[32,32]} className='crypto-card-container'>
                {cryptos?.map((currency)=>(
                    <Col xs={24} key={currency.uuid} lg={6} className='crypto-card'>
                        <Link to={`/crypto/${currency.uuid}`}>
                            <Card title={`${currency.rank} ${currency.name}`}
                                  extra={<img className='crypto-image' alt={currency.name}  src={currency.iconUrl}/> }
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