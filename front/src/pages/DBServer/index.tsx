import React, { useEffect, useRef, useState } from 'react';
import "./styles.css"
import Header from '../../components/Header';
import { useNavigate } from 'react-router-dom';

function DBServer() {

    const navigate = useNavigate();

    return (
        <div className="DBServer">
            <Header />
            <div className="direct_service" >
                <div className="db_server">
                    <div className="db_description">
                        <br />
                        <h3>데이터베이스</h3>
                        <p>AMD 기반의 빠른 VM과 넉넉한 용량의 데이터 베이스를 경험해보세요.</p>
                        <p>AMD 기반의 빠른 VM과 넉넉한 용량의 데이터 베이스를 경험해보세요.</p>
                        <p>AMD 기반의 빠른 VM과 넉넉한 용량의 데이터 베이스를 경험해보세요.</p>
                        <p>AMD 기반의 빠른 VM과 넉넉한 용량의 데이터 베이스를 경험해보세요.</p>
                        <p>AMD 기반의 빠른 VM과 넉넉한 용량의 데이터 베이스를 경험해보세요.</p>
                    </div>
                    <div style={{ width: "300px", margin: "10px", marginLeft: "60px" }}>
                        <br/>
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
export default DBServer;