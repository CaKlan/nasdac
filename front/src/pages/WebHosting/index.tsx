import React, { useEffect, useRef, useState } from 'react';
import "./styles.css"
import Header from '../../components/Header';

function WebHosting(){

    const direct_service = useRef<HTMLDivElement>(null);

    useEffect(()=>{
        console.log('expand');
        
    }, [])
    return (
        <div className="WebHosting">
            <Header />
            
            <div className="direct_service" ref={direct_service} onClick={(e)=>{e.currentTarget.style.setProperty('height', '1000px')}}>
                <div className="web_hosting">
                    <div className="wh_contact"> {/* wh : Web Hosting*/}
                        <p style={{fontSize:"30px",fontWeight:"bold",marginBottom:"-30px"}}>웹 호스팅을</p>
                        <p style={{fontSize:"30px",fontWeight:"bold"}}>간편하게</p>
                        <p>무료로 클라우드 시스템을 가입하고 웹 호스팅 서비스를 해보세요!</p>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <p style={{color:"rgb(235, 235, 235)"}}> 마우스를 올려 자세히 보기</p>
                        <div className="wh_button">
                            웹 호스팅 서비스 가입
                        </div>
                    </div>
                    <div  style={{width:"300px", margin:"10px", marginRight:"60px"}}>
                        <br/>
                        <h3>인프라</h3>
                        <div style={{textAlign:"start"}}>
                            <ul>
                                <li>Processor : AMD Ryzen 5 - 5600G</li><br/>
                                <li>RAM : 4GB</li><br/>
                                <li>Storage : 50GB</li><br/>
                                <li>Virtual Machine : VMware</li><br/>
                                <li>Performance : 1초당 5만번의 요청</li><br/>
                            </ul>
                        </div>
                    </div>
                    <div className="wh_description">
                        <br/>
                        <h3>웹 호스팅</h3>
                        <p>정적 웹페이지, React, Next.js에 이르는 다양한 웹 호스팅 서비스를 경험해보세요.</p>
                        <p>24시간동안 끊임없는 서비스.</p>
                        <p>AMD 기반의 빠른 VM과 넉넉한 용량의 데이터 베이스를 경험해보세요.</p>
                        <p>AMD 기반의 빠른 VM과 넉넉한 용량의 데이터 베이스를 경험해보세요.</p>
                        <p>AMD 기반의 빠른 VM과 넉넉한 용량의 데이터 베이스를 경험해보세요.</p>
                    </div>
                    
                </div>
                <div className="information">
                    
                </div>
            </div>
        </div>
    );
}
export default WebHosting;