
import {useGetNewsQuery} from "../services/newsAPi";
import {Avatar, Card, Col, Row, Select, Typography} from "antd";
import moment from "moment";
import {log10} from "chart.js/helpers";
import {useState} from "react";
import {useGetCryptosQuery} from "../services/cryptoApi";

const {Text, Title} = Typography;
const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';
const { Option } = Select;

export function News({simplified}) {
    const [category, setCategory] = useState('Cryptocurrency')
    const {data:news} = useGetNewsQuery({newsCategory: category, count:simplified? 6 : 12});
    const {data} = useGetCryptosQuery(100);

    if(!news?.value) return 'Loading...'
    return (
        <Row gutter={[24,24]}>
            {!simplified && (
                <Col span={24}>
                    <Select showSearch className='select-news' placeholder='Select a news category' optionFilterProp='children'
                    onChange={(value)=> setCategory(value)}
                            filterOption={(input, option)=> option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0 }>
                        <Option value='Cryptocurrency'>Cryptocurrency</Option>
                        {data?.data?.coins.map((coin)=><Option value={coin.name}>{coin.name}</Option>)}
                    </Select>
                </Col>
            )}
            {news?.value.map((n,i)=>(
                <Col xs={24} sm={12} lg={6} key={i}>
                    <Card hoverable className='news-card'>
                        <a href={n.url} target='_blank' ref='noreferrer'>
                            <div className='news-image-container'>
                                <Title className='news-title' level={4}>{n.name}</Title>
                                <img style={{maxWidth: '200px', maxHeight:'100px' }} src={n?.image?.thumbnail?.contentUrl || demoImage} alt={n.name}/>
                            </div>
                            <p>
                                {n.description > 100 ? `${n.description.substring(0,100)}...` :  n.description}
                            </p>
                            <div className='provider-container'>
                                <div>
                                    <Avatar src={n.provider[0]?.image?.thubnail?.contentUrl || demoImage} alt=''></Avatar>
                                    <Text className='provider-name'>{n.provider[0]?.name}</Text>
                                </div>
                                <Text>{moment(n.datePublished).startOf('ss').fromNow()}</Text>
                            </div>
                        </a>
                    </Card>
                </Col>
            ))}
        </Row>
    )
}