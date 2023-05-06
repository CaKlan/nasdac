import React, { useEffect, useRef, useState } from 'react';
import "./styles.css"
import Header from '../../components/Header';
import { useNavigate } from 'react-router-dom';

function Home() {

    const navigate = useNavigate();

    const [whOver, setWhOver] = useState(false);
    const [dbOver, setDbOver] = useState(false);

    const [whOpen, setWhOpen] = useState(false);
    const [dbOpen, setDbOpen] = useState(false);
    const [whDirect, setWhDirect] = useState(false);
    const [dbDirect, setDbDirect] = useState(false);

    const webHostingRef = useRef<HTMLDivElement | null>(null);
    const dbServerRef = useRef<HTMLDivElement | null>(null);
    const detail = useRef<HTMLUListElement | null>(null);



    function webHostingEnter(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        e.preventDefault();
        e.currentTarget.style.setProperty('width', '1100px');
        e.currentTarget.style.setProperty('box-shadow', '0 0 10px blueviolet');
        e.currentTarget.style.setProperty('z-index', '1');
        e.currentTarget.style.setProperty('border', '1px solid blueviolet');
        setWhOpen(true);
    }

    function webHostingLeave(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        e.preventDefault();
        e.currentTarget.style.setProperty('width', '750px');
        e.currentTarget.style.setProperty('box-shadow', 'none');
        e.currentTarget.style.setProperty('border', '1px solid var(--main-elem1)');
        setWhOver(false);
        setWhOpen(false);
    }

    function dbServerEnter(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        e.preventDefault();
        e.currentTarget.style.setProperty('margin-left', '400px');
        e.currentTarget.style.setProperty('width', '750px');
        e.currentTarget.style.setProperty('box-shadow', '0 0 10px blueviolet');
        e.currentTarget.style.setProperty('z-index', '1')
        e.currentTarget.style.setProperty('border', '1px solid blueviolet');
        setDbOpen(true);
    }

    function dbServerLeave(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        e.preventDefault();
        e.currentTarget.style.setProperty('width', '750px');
        e.currentTarget.style.setProperty('margin-left', '750px');
        e.currentTarget.style.setProperty('box-shadow', 'none');
        e.currentTarget.style.setProperty('z-index', '0')
        e.currentTarget.style.setProperty('border', '1px solid var(--main-elem1)');
        setDbOver(false);
        setDbOpen(false);
    }

    function contactWebHosting(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        setWhDirect(true);
        e.currentTarget.style.setProperty('width', "1500px");
    }

    function contactDbServer(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        setDbDirect(true);
        e.currentTarget.style.setProperty('margin-left', '0px');
    }

    return (
        <div className="Home">
            <Header />

            <div className="direct_service" >
                <div className="web_hosting" ref={webHostingRef}
                    onClick={(e) => { contactWebHosting(e); }}
                    onMouseEnter={(e) => { if (!whDirect) { webHostingEnter(e); } }}
                    onMouseLeave={(e) => { if (!whDirect) { webHostingLeave(e); } }}
                    onTransitionEnd={(e) => {

                        if (whOpen) {
                            setWhOver(true);
                            detail.current?.style.setProperty('opacity', "1");
                        } else {
                            e.currentTarget.style.setProperty('z-index', '0');
                        }
                        // width 이벤트가 끝이 나면 navigate합니다.
                        // whDirect는 웹 호스팅 (wh_hosting)을 클릭할 때 false에서 true가 됩니다.
                        if (whDirect && e.propertyName == 'width') {
                            navigate('/webhosting');
                            console.log("nav!");
                        }
                    }}>
                    <div className="wh_contact"> {/* wh : Web Hosting*/}
                        <p style={{ fontSize: "30px", fontWeight: "bold", marginBottom: "-30px" }}>웹 호스팅을</p>
                        <p style={{ fontSize: "30px", fontWeight: "bold" }}>간편하게</p>
                        <p>무료로 클라우드 시스템을 가입하고 웹 호스팅 서비스를 해보세요!</p>
                        <br />
                        <br />
                        <br />
                        <br />
                        <p style={{ color: "rgb(235, 235, 235)" }}> 마우스를 올려 자세히 보기</p>
                        <div className="wh_button" onClick={contactWebHosting}>
                            웹 호스팅 서비스 가입
                        </div>
                    </div>
                    {whOver &&
                        <div style={{ width: "300px", margin: "10px", marginRight: "60px" }}>
                            <h3>인프라</h3>
                            <div style={{ textAlign: "start" }}>
                                <ul className="detail" ref={detail}>
                                    <li>Processor : AMD Ryzen 5 - 5600G</li><br />
                                    <li>RAM : 4GB</li><br />
                                    <li>Storage : 50GB</li><br />
                                    <li>Virtual Machine : VMware</li><br />
                                    <li>Performance : 1초당 5만번의 요청</li><br />
                                </ul>
                            </div>
                        </div>
                    }
                    <div className="wh_description">
                        <br />
                        <h3>웹 호스팅</h3>
                        <p>정적 웹페이지, React, Next.js에 이르는 다양한 웹 호스팅 서비스를 경험해보세요.</p>
                        <p>24시간동안 끊임없는 서비스.</p>
                        <p>AMD 기반의 빠른 VM과 넉넉한 용량의 데이터 베이스를 경험해보세요.</p>
                        <p>AMD 기반의 빠른 VM과 넉넉한 용량의 데이터 베이스를 경험해보세요.</p>
                        <p>AMD 기반의 빠른 VM과 넉넉한 용량의 데이터 베이스를 경험해보세요.</p>
                    </div>

                </div>
                <div className="db_server" ref={dbServerRef}
                    onClick={(e) => { contactDbServer(e); }}
                    onMouseEnter={(e) => { if (!dbDirect) { dbServerEnter(e); } }}
                    onMouseLeave={(e) => { if (!dbDirect) { dbServerLeave(e); } }}
                    onTransitionEnd={(e) => {

                        if (dbOpen) {
                            setDbOver(true);
                            detail.current?.style.setProperty('opacity', "1");
                        } else {
                            e.currentTarget.style.setProperty('z-index', '0');
                        }

                        // margin-left 이벤트가 끝이나면 navigate합니다.
                        // dbDirect는 데이터베이스 (db_server)를 클릭할 때 false에서 true가 됩니다.
                        if (dbDirect && e.propertyName == 'margin-left') {
                            navigate('/dbserver');
                            console.log("nav!");
                        }
                    }}>
                    <div className="db_description">
                        <br />
                        <h3>데이터베이스</h3>
                        <p>AMD 기반의 빠른 VM과 넉넉한 용량의 데이터 베이스를 경험해보세요.</p>
                        <p>AMD 기반의 빠른 VM과 넉넉한 용량의 데이터 베이스를 경험해보세요.</p>
                        <p>AMD 기반의 빠른 VM과 넉넉한 용량의 데이터 베이스를 경험해보세요.</p>
                        <p>AMD 기반의 빠른 VM과 넉넉한 용량의 데이터 베이스를 경험해보세요.</p>
                        <p>AMD 기반의 빠른 VM과 넉넉한 용량의 데이터 베이스를 경험해보세요.</p>
                    </div>

                    {dbOver &&
                        <div style={{ width: "300px", margin: "10px", marginLeft: "60px" }}>
                            <h3>인프라</h3>
                            <div style={{ textAlign: "start" }}>
                                <ul>
                                    <li>Processor : AMD Ryzen 5 - 5600G</li><br />
                                    <li>RAM : 4GB</li><br />
                                    <li>Storage : 200GB</li><br />
                                    <li>Virtual Machine : I don't know</li><br />
                                </ul>
                            </div>
                        </div>
                    }
                    <div className="db_contact">
                        <p style={{ fontSize: "30px", fontWeight: "bold", marginBottom: "-30px" }}>데이터베이스를</p>
                        <p style={{ fontSize: "30px", fontWeight: "bold" }}>빠르게</p>
                        <p color="gray">무료로 클라우드 시스템을 가입하고 웹 호스팅 서비스를 해보세요!</p>
                        <br />
                        <br />
                        <br />
                        <br />
                        <p style={{ color: "rgb(235, 235, 235)" }}> 마우스를 올려 자세히 보기</p>

                        <div className="db_button">
                            데이터베이스 서비스 가입
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Home;