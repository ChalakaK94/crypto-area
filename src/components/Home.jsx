import {Col, Row, Statistic, Typography} from "antd";

import {useGetCryptosQuery} from '../services/cryptoApi'
import millify from "millify";
import {Link} from "react-router-dom";
import {Cryptocurrencies} from "./Cryptocurrencies";
import {News} from "./News";


const {Title}  = Typography

export function Home() {
    const { data, isFetching } = useGetCryptosQuery(10);

    const globalStats = data?.data?.stats
    console.log({data})

    if(isFetching) return 'Loading....'
    return (
        <>
            <Title level={2} className='heading'>Globe Crypto Stats</Title>
            <Row>
                <Col span={12}><Statistic title='Total CryptoCurrencies' value={globalStats.total}/></Col>
                <Col span={12}><Statistic title='Total Exchange' value={millify(globalStats.totalExchanges)}/></Col>
                <Col span={12}><Statistic title='Total Market Cap' value={millify(globalStats.totalMarketCap)}/></Col>
                <Col span={12}><Statistic title='Total 24h Volume' value={millify(globalStats.total24hVolume)}/></Col>
                <Col span={12}><Statistic title='Total Market' value={millify(globalStats.totalMarkets)}/></Col>
            </Row>
            <div className='home-heading-container'>
                <Title level={2} className='home-title'>Top 10 Currencies</Title>
                <Title level={3} className='show-more'><Link to='/cryptocurrencies'>Show More...</Link></Title>
            </div>
            <Cryptocurrencies simplified={true}/>
            <div className='home-heading-container'>
                <Title level={2} className='home-title'>Latest Currencies News</Title>
                <Title level={3} className='show-more'><Link to='/cryptocurrencies'>Show More...</Link></Title>
            </div>
            <News simplified/>
        </>
    )
}