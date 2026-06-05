// Professional flow configurations
const flowsData = {
    inheritance: {
        title: "繼承案件必備文件查核清單",
        steps: {
            1: {
                title: "第一階段：案件受理與文件清查",
                shortTitle: "案件受理與文件清查",
                time: "1 - 3 工作天",
                agency: "戶政事務所、地政士事務所",
                desc: "與繼承人詳細面談諮詢，釐清被繼承人之家族關係，並確認全體繼承人狀況。地政士會開始繪製「繼承系統表」草稿，清查被繼承人死亡除戶資料及全體繼承人現戶戶籍資料，確認有無涉外或大陸繼承人，並評估是否需辦理拋棄繼承或限定繼承。",
                docs: [
                    "被繼承人死亡登記謄本 (除戶戶籍謄本)",
                    "全體繼承人現戶戶籍謄本 (記事欄不可省略)",
                    "繼承系統表草稿",
                    "法院拋棄繼承准予備查函 (若有繼承人拋棄繼承者需附)"
                ],
                tips: "若繼承人中有人欲辦理「拋棄繼承」，必須在「知悉其得繼承之時起三個月內」，以書面向被繼承人住所地之管轄法院提出聲請，逾期即喪失權利。地政士應協助把關時效。若有繼承人拋棄繼承，過戶登記時需檢附法院核發的拋棄繼承准予備查函正本。"
            },
            2: {
                title: "第二階段：遺產清查與申報準備",
                shortTitle: "遺產清查與申報準備",
                time: "3 - 7 工作天",
                agency: "國稅局、稅捐稽徵處、地政事務所",
                desc: "地政士將代同繼承人向國稅局申請被繼承人之「財產歸屬清單」及「金融遺產清單」（清查存款、股票、保單等）。同時，向不動產所在地之地政事務所調閱最新的「土地及建物第一類登記謄本」，以及向地方稅捐處申請房屋評定現值，做為申報遺產稅的估價基礎。",
                docs: [
                    "被繼承人國稅局財產歸屬清單與金融遺產清冊",
                    "土地及建物第一類登記謄本",
                    "當期房屋評定現值證明 / 地價證明"
                ],
                tips: "謄本必須申請「第一類謄本」，以取得完整的所有權人身分證字號與記事欄。此外需清查不動產上是否有設定抵押權、查封或其他權利負擔，避免登記後產生糾紛。"
            },
            3: {
                title: "第三階段：遺產稅申報與取得證明",
                shortTitle: "遺產稅申報與取得證明",
                time: "7 - 14 工作天",
                agency: "國稅局 (被繼承人戶籍所在地)",
                desc: "依據清查的財產清單填寫遺產稅申報書。地政士會精算各項免稅額、扣除額（如配偶扣除額、直系血親卑親屬扣除額、辦理辦理喪葬費扣除等）以合法節稅。向國稅局申報遺產稅後，若有稅款則協助完成繳納，最終取得「遺產稅繳清證明書」或無稅時取得「遺產稅免稅證明書」。",
                docs: [
                    "遺產稅申報書",
                    "國稅局核發之「遺產稅免稅證明書」或「遺產稅繳清證明書」",
                    "遺產稅申報相關身分與財產評估文件"
                ],
                tips: "遺產稅申報的法定時限為「被繼承人死亡之日起六個月內」，逾期申報會被處以罰鍰。若因尋找繼承人、財產複雜等正當理由無法按時申報，可於期滿前向國稅局聲請展延三個月。"
            },
            4: {
                title: "第四階段：分割協議與印鑑證明",
                shortTitle: "分割協議與印鑑證明",
                time: "2 - 5 工作天",
                agency: "全體繼承人住所、戶政事務所",
                desc: "繼承人可協議將財產不按法定應繼分分配（例如由其中一人繼承特定土地，其他人繼承現款或不分配）。此時必須撰寫「遺產分割協議書」，由全體繼承人親自簽名並蓋「印鑑章」。為此，各繼承人必須前往戶籍所在地之戶政事務所申請「印鑑證明」以資證明意願。",
                docs: [
                    "遺產分割協議書 (正副本各一份，正本需貼印花稅票)",
                    "全體繼承人印鑑證明書 (申辦用途：不動產登記，一年內有效)",
                    "全體繼承人印鑑章"
                ],
                tips: "遺產分割協議書是整件繼承案的核心文件，必須全體繼承人蓋印鑑章，印文必須極為清晰，且需與印鑑證明上的圖樣百分之百吻合。協議書正本需依契約金額的千分之一黏貼印花稅票。"
            },
            5: {
                title: "第五階段：地方稅查欠",
                shortTitle: "地方稅查欠",
                time: "1 - 2 工作天",
                agency: "地方稅務局 / 稅捐稽徵處",
                desc: "在送地政事務所辦理所有權移轉登記前，必須先至不動產所在地之稅捐稽徵處辦理地方稅（地價稅、房屋稅）的查欠作業。地政士會將分割協議書及遺產稅證明書送查，稅捐機關核對無欠稅後，會在遺產稅證明書上加蓋「無欠地價稅、房屋稅」之查欠戳記。",
                docs: [
                    "國稅局遺產稅免稅/繳清證明書正本 (供蓋查欠戳記)",
                    "遺產分割協議書正本",
                    "地價稅與房屋稅繳納憑證 (若有欠稅)"
                ],
                tips: "繼承案件本身是免徵土地增值稅及契稅的，但法律規定必須完成「查欠」手續。如果該不動產有欠繳地價稅或房屋稅，必須先行繳清，否則地政事務所會駁回登記申請。"
            },
            6: {
                title: "第六階段：地政事務所登記與結案",
                shortTitle: "地政事務所登記與結案",
                time: "3 - 5 工作天",
                agency: "土地所在地之地政事務所",
                desc: "地政士將填妥土地登記申請書及登記清冊，併同前面所有階段取得之除戶謄本、繼承系統表、印鑑證明、遺產稅完稅證明（已蓋查欠戳記）、分割協議書、及原權狀等文件，送交地政事務所進行審查。經地政事務所審查無誤並登入地籍資料庫後，發給繼承人全新權狀並結案領狀。",
                docs: [
                    "土地登記申請書及登記清冊",
                    "載明查欠戳記之遺產稅免稅/繳清證明書正本",
                    "全體繼承人現戶謄本、除戶謄本、繼承系統表及印鑑證明",
                    "遺產分割協議書",
                    "原土地及建物所有權狀正本"
                ],
                tips: "不動產繼承登記應於「繼承開始之日起六個月內」向地政事務所辦理。逾期申請者，每逾一個月處登記規費一倍的罰鍰，最高可罰到二十倍（以登記費計算）。若繼承人意見不一致，可先由部分繼承人申請登記為全體公同共有，以避免規費罰鍰。特別注意：若自繼承開始之日起「逾一年」仍未申辦登記，地政機關將公告並限期三個月內申辦，逾期未辦者將予以「列冊管理」十五年；期滿仍未登記者，將移交國有財產署辦理「公開標售」，所得價款專戶儲存，若逾十年無人提領則歸屬國庫。"
            }
        },
        checklist: [
            {
                group: "一、戶政與繼承人證明文件",
                items: [
                    "被繼承人死亡登記謄本 (除戶戶籍謄本)",
                    "全體繼承人現戶戶籍謄本 (記事不可省略)",
                    "繼承系統表 (詳細載明親屬關係與應繼分)",
                    "全體繼承人印鑑證明 (分割繼承案件必備)",
                    "法院拋棄繼承准予備查函 (若有繼承人拋棄繼承者)"
                ]
            },
            {
                group: "二、財產估價與遺產稅文件",
                items: [
                    "國稅局遺產稅免稅證明書 (或繳清、同意移轉證明書)",
                    "土地及建物第一類登記謄本",
                    "房屋評定現值證明 (向地方稅捐處申請)",
                    "遺產分割協議書 (正副本各一份，需貼印花稅票)"
                ]
            },
            {
                group: "三、地政登記申請文件",
                items: [
                    "土地登記申請書 (格式由地政司統一規定)",
                    "登記清冊 (載明所有辦理繼承之不動產明細)",
                    "原土地及建物所有權狀 (若遺失需附切結書)",
                    "地方稅查欠戳記 (需在地價稅、房屋稅查無欠稅)"
                ]
            }
        ]
    },
    gift: {
        title: "贈與案件必備文件查核清單",
        steps: {
            1: {
                title: "第一階段：案件受理與文件清查",
                shortTitle: "案件受理與文件清查",
                time: "1 - 2 工作天",
                agency: "地政士事務所",
                desc: "與贈與人及受贈人詳細諮詢面談，核對贈與標的產權資訊與雙方身分關係。地政士會開始清查並核對權狀、雙方戶籍資料等，確認雙方贈與的具體節稅規劃（例如規劃每年244萬免稅額或二親等以內親屬申報注意事項），以確保產權移轉合規。",
                docs: [
                    "贈與人身分證明文件 (身分證影本、戶籍謄本等)",
                    "受贈人身分證明文件 (身分證影本、戶籍謄本等)",
                    "二親等以內親屬關係證明文件 (如全體戶籍謄本/戶口名簿)",
                    "原土地及建物所有權狀正本"
                ],
                tips: "地政士在此階段需確認贈與人的「意思能力」是否健全，且雙方需有明確的贈與意圖。特別注意：若為「二親等以內親屬間財產移轉」，實務上常面臨申報「贈與」或「二親等買賣」的選擇。如申報為買賣，國稅局會嚴格審查買受人的獨立資金來源及支付價金金流，若無法提出確切證明，將被依遺產及贈與稅法第5條第6款「視同贈與」課徵贈與稅。"
            },
            2: {
                title: "第二階段：地方稅申報 (土增稅及契稅)",
                shortTitle: "地方稅申報",
                time: "3 - 5 工作天",
                agency: "地方稅務局 / 稅捐稽徵處",
                desc: "撰寫申報契約書（俗稱公契，分別為土地贈與所有權移轉契約書、建物贈與所有權移轉契約書），並填具土地增值稅及房屋契稅申報書，遞送至不動產所在地之稅捐處進行稅額審核。地方稅申報完成後取得「土地增值稅繳款書」及「契稅繳款書」。",
                docs: [
                    "公定贈與契約書 (公契，正副本，正本需貼印花稅票)",
                    "土地增值稅申報書與契稅申報書",
                    "當期土地公告現值與房屋現值明細"
                ],
                tips: "公契正本需要按照契約總金額的千分之一「黏貼印花稅票」（可向郵局購買或至地方稅網路申報處開立大額憑證繳款書貼付）。贈與不能申請土地增值稅自用住宅優惠稅率，須按一般稅率辦理。"
            },
            3: {
                title: "第三階段：國稅局贈與稅申報",
                shortTitle: "贈與稅申報",
                time: "5 - 10 工作天",
                agency: "國稅局 (贈與人戶籍所在地)",
                desc: "地政士代申報人填具「贈與稅申報書」，檢附身分證明文件、已完印花稅之公契（或買賣契約私契）以及關係證明。申報後取得國稅局核發的「贈與稅免稅證明書」；若贈與價值超過免稅額度，繳清後取得「贈與稅繳清證明書」。若為二親等買賣且金流舉證成功，則取得「贈與稅同意移轉證明書」。",
                docs: [
                    "贈與稅申報書",
                    "國稅局核發之「遺產及贈與稅免稅/繳清/同意移轉證明書」正本",
                    "二親等移轉必備：買受人自立資金來源證明與支付價金金流憑證 (如為申報二親等買賣)"
                ],
                tips: "依遺產及贈與稅法規定，贈與應於契約訂立之日起「30天內」向國稅局申報。特別注意：二親等以內親屬間財產買賣，雖免課贈與稅，但仍「必須」向國稅局申報並取得「同意移轉證明書」，地政事務所始得辦理過戶。申報時需檢附買受人自立資金來源證明（如薪資證明、歷年理財存摺明細等），且支付資金不得由出賣人提供或保證借貸。此外，依遺產及贈與稅法第15條規定，被繼承人「死亡前二年內」贈與給配偶、各順序繼承人（如直系血親卑親屬、父母、兄弟姊妹、祖父母）及其配偶之財產，在被繼承人死亡時，均視為遺產，須併入遺產總額申報與課徵遺產稅（生前已納之贈與稅及土地增值稅可依法在限額內扣抵），規劃生前贈與節稅時務必留意此規定。"
            },
            4: {
                title: "第四階段：稅款繳納與地方稅查欠",
                shortTitle: "地方稅完稅查欠",
                time: "1 - 2 工作天",
                agency: "指定代理銀行、地方稅捐處",
                desc: "地政士將帶領客戶（或代辦）至指定金融機構繳清第二階段申報之土地增值稅及建物契稅。繳清後，持完稅收據正本及公定贈與契約書，至地方稅捐處的查欠櫃檯辦理查欠，確認無欠繳歷年之地價稅與房屋稅，核蓋「地方稅無欠稅戳記」。",
                docs: [
                    "已繳清之土地增值稅與契稅繳款書收據正本",
                    "土地贈與及建物贈與公契正本",
                    "已完稅/免稅之國稅局贈與稅證明書正本"
                ],
                tips: "「查欠」戳記必須蓋在公契正本上。如有歷年欠稅或工程受益費，必須先繳清才能蓋章查欠。無查欠章的地政登記件將會被地政事務所駁回。"
            },
            5: {
                title: "第五階段：地政事務所送件登記",
                shortTitle: "地政移轉登記",
                time: "3 - 5 工作天",
                agency: "土地所在地之地政事務所",
                desc: "整理所有完稅及查欠戳記的公契、登記申請書、登記清冊、雙方身分證明文件、印鑑證明、土地建物原權狀，正式送往不動產轄區地政事務所辦理所有權移轉登記。地政事務所收件後會進行內部審查，無誤後會登入地籍管理系統變更產權。",
                docs: [
                    "土地登記申請書及登記清冊",
                    "已查欠完稅之贈與公契正本、印花稅票證明",
                    "贈與人印鑑證明 (土地移轉登記用途，一年內有效)",
                    "贈與稅免稅或繳清證明書正本",
                    "原土地及建物所有權狀正本"
                ],
                tips: "贈與案件在地政登記時，贈與人（原屋主）如果不能親自到場，依法必須檢附「印鑑證明」並蓋印鑑章，以證明產權移轉的真實意願，印文必須極為清晰。特別注意：不動產贈與登記必須自「贈與契約訂立之日起一個月內」辦理移轉登記，逾期申請將處以登記規費最高二十倍之罰鍰。"
            },
            6: {
                title: "第六階段：領取新權狀與結案交付",
                shortTitle: "新權狀領取與結案",
                time: "1 工作天",
                agency: "地政事務所、地政士事務所",
                desc: "移轉登記審核通過後，地政事務所會發行受贈人名義之全新「土地所有權狀」及「建物所有權狀」。地政士會代替領取，核對權狀記載內容，並將新權狀、契稅地政規費收據、申報各項證明影本整理成精裝案卷袋，正式交付給委託人，完成結案。",
                docs: [
                    "新土地所有權狀及新建物所有權狀正本 (受贈人名義)",
                    "各項政府規費收據正本 (地政登記費、書狀費等)",
                    "地政士服務費用明細與案卷備份"
                ],
                tips: "領取新權狀後，地政士需第一時間核對所有人姓名、身分證字號、土地地號、建物建號以及產權權利範圍（持分）是否與當初申報公契完全一致。交付權狀時，提醒客戶將其妥善存放在防潮、防火的保險箱內。"
            }
        },
        checklist: [
            {
                group: "一、戶政與當事人證明文件",
                items: [
                    "贈與人及受贈人雙方戶籍謄本 (記事欄不可省略)",
                    "二親等以內親屬關係證明文件 (如全體戶口名簿/戶籍謄本)",
                    "贈與人印鑑證明書 (土地所有權移轉登記用途，一年內有效)",
                    "雙方身分證正反面影本及印鑑章"
                ]
            },
            {
                group: "二、契約與完稅證明文件",
                items: [
                    "公定贈與契約書 (公契，正副本，正本需貼印花稅票)",
                    "買受人自立資金來源證明與金流支付憑證 (二親等申報買賣必備)",
                    "已繳清之土地增值稅及契稅繳款書收據正本",
                    "國稅局贈與稅完稅證明書 (免稅/繳清/同意移轉證明書) 正本"
                ]
            },
            {
                group: "三、地政移轉登記文件",
                items: [
                    "土地登記申請書及登記清冊 (詳列不動產標的)",
                    "土地及建物第一類登記謄本 (過戶登記用)",
                    "贈與人原土地及建物所有權狀正本",
                    "地方稅查欠戳記 (需加蓋於公契上以資證明)"
                ]
            }
        ]
    },
    sale: {
        title: "買賣案件必備文件查核清單",
        steps: {
            1: {
                title: "第一階段：簽約用印與備證",
                shortTitle: "簽約用印與備證",
                time: "1 - 2 工作天",
                agency: "地政士事務所",
                desc: "買賣雙方達成不動產交易協議，由地政士核對當事人身分並主持簽訂「不動產買賣契約書」（私契）。賣方交付權狀正本、印鑑證明、印鑑章，買方支付第一期簽約款，雙方備妥報稅用印之文件。",
                docs: [
                    "買賣雙方身分證明文件 (身分證影本、戶籍謄本等)",
                    "賣方土地及建物所有權狀正本",
                    "賣方印鑑證明 (土地登記移轉用途，一年內有效) 及印鑑章"
                ],
                tips: "地政士在此階段須核對所有權人身分是否屬實，確認有無涉及限制登記（如假扣押、查封、預告登記）。賣方印鑑章之印文必須與印鑑證明完全吻合。"
            },
            2: {
                title: "第二階段：用印與地方稅申報",
                shortTitle: "用印地方稅申報",
                time: "3 - 5 工作天",
                agency: "地方稅務局 / 稅捐稽徵處",
                desc: "地政士協助雙方於土地/建物登記申請書、公定買賣契約書（公契）加蓋印鑑章，並向地方稅捐稽徵處申報土地增值稅（賣方）及房屋契稅（買方）。完成後，買方支付第二期用印款。",
                docs: [
                    "公定買賣契約書 (公契，正副本，正本需貼印花稅票)",
                    "土地增值稅申報書與房屋契稅申報書",
                    "申報適用自用住宅優惠稅率證明 (若賣方符合資格)"
                ],
                tips: "公契正本須貼契約金額千分之一的印花稅票。此時若賣方符合自用住宅條件（如一生一次、一生一屋），地政士應協助申請按自用住宅優惠稅率（10%）課徵土地增值稅，以減輕稅負。"
            },
            3: {
                title: "第三階段：稅款繳納與地方稅查欠",
                shortTitle: "完稅查欠戳印",
                time: "2 - 3 工作天",
                agency: "地方稅捐處、代收金融機構",
                desc: "地方稅捐處核發土地增值稅及契稅稅單，地政士通知買賣雙方限期繳納完稅。繳納完畢後，將稅單收據與公契正本送地方稅捐處進行「查欠」，確認該不動產無欠繳地價稅與房屋稅，取得免稅/繳清之查欠戳記。買方支付第三期完稅款。",
                docs: [
                    "已繳清之土地增值稅與契稅繳款書收據正本",
                    "買賣公契正本 (供稅捐處加蓋查欠戳記)",
                    "歷年欠稅之繳清收據 (若有欠地價稅或房屋稅)"
                ],
                tips: "必須繳清歷年欠繳的地價稅與房屋稅才能取得查欠戳記。如果買方需要貸款，本階段應一併協調銀行進行貸款對保及核貸手續。"
            },
            4: {
                title: "第四階段：銀行貸款與抵押權設定",
                shortTitle: "貸款對保設定",
                time: "3 - 7 工作天",
                agency: "承貸銀行、地政士事務所",
                desc: "買方若需向銀行辦理房屋貸款，銀行核貸後會安排對保。地政士會撰寫「抵押權設定」之地政登記申請書及契約書，由買方加蓋印章與提供身分證明文件，準備與過戶登記合併辦理，以利後續撥款。",
                docs: [
                    "貸款銀行核貸與設定契約文件 (他項權利設定書表)",
                    "買方身分證明文件及印章",
                    "銀行配合撥款同意書或履約保證書"
                ],
                tips: "所有權移轉登記（過戶）與抵押權設定登記（貸款）必須「連件」送交地政事務所辦理。這可以確保權狀過戶給買方後，銀行能同步取得抵押權保障，隨後始能順利撥款。"
            },
            5: {
                title: "第五階段：地政事務所送件過戶",
                shortTitle: "地政送件審查",
                time: "3 - 5 工作天",
                agency: "不動產所在地之地政事務所",
                desc: "地政士將整理妥當的所有文件（含完稅公契、登記申請書、登記清冊、賣方印鑑證明、雙方身分證明、原權狀正本）正式送往不動產轄區地政事務所，辦理所有權移轉（買賣）及抵押權設定登記審查，並併同辦理不動產成交案件實際資訊申報（實價登錄）。",
                docs: [
                    "土地/建物登記申請書及登記清冊",
                    "已蓋查欠完稅戳記之買賣公契正本",
                    "賣方印鑑證明、雙方身分證明、原權狀正本",
                    "不動產成交案件實際資訊申報書 (實價登錄申報書，併同送件)"
                ],
                tips: "送件後地政事務所通常審查需要三個工作天。若有缺漏或記載錯誤，地政士必須在收到補正通知15天內完成補正，否則會被駁回。本階段亦須繳付登記費及書狀費。特別注意：買賣移轉登記必須自「買賣契約訂立之日起一個月內」辦理登記，逾期處最高二十倍規費罰鍰。此外，實價登錄依法須在移轉登記時「併同申報」。地政士受託申報若逾期或成交價格申報不實，主管機關將不經限期改正直接裁處新臺幣三萬至十五萬元罰鍰，且可能負刑法使公務員登載不實罪之刑事責任。"
            },
            6: {
                title: "第六階段：交屋、結案與尾款撥付",
                shortTitle: "交屋過戶結案",
                time: "1 - 2 工作天",
                agency: "買賣不動產現場、地政士事務所",
                desc: "過戶完成後，地政士前往地政事務所領取新所有權狀（買方名義）與他項權利證明書。會同買賣雙方進行現場點交房屋（確認屋況、抄錄水電瓦斯表），交還所有鑰匙，並請履保專戶清算撥付尾款予賣方，完成交屋手續。",
                docs: [
                    "新土地所有權狀及新建物所有權狀正本 (買方名義)",
                    "交屋確認書 (經買賣雙方簽字確認)",
                    "各項稅費收據、地政規費收據及代書服務明細",
                    "賣方原貸款之抵押權塗銷登記證明 (如債務清償證明書，若賣方有原貸款者)"
                ],
                tips: "交屋完成後，地政士應協助買方申請房屋稅、地價稅按「自用住宅優惠稅率」課徵（地價稅每年須在9月22日前申請，房屋稅則於變更30天內申請），以享減稅福利。若賣方原本有未繳清的銀行房貸，地政士須在貸款銀行收到買方尾款並出具「債務清償證明書」及「抵押權塗銷同意書」後，代向地政事務所申請「抵押權塗銷登記」，以交付乾淨產權。"
            }
        },
        checklist: [
            {
                group: "一、戶政與當事人證明文件",
                items: [
                    "買賣雙方身分證正反面影本或戶籍謄本",
                    "賣方印鑑證明書 (土地所有權移轉登記用途，一年內有效)",
                    "賣方印鑑章及買方印章",
                    "授權書及被授權人身分證明 (若有委託他人)"
                ]
            },
            {
                group: "二、契約與完稅憑證文件",
                items: [
                    "公定買賣契約書 (公契，正副本，正本需貼印花稅票)",
                    "已繳清之土地增值稅及契稅繳款書收據正本",
                    "私定買賣契約書 (私契 / 簽約用)",
                    "土地及建物第一類登記謄本"
                ]
            },
            {
                group: "三、地政移轉與貸款文件",
                items: [
                    "土地/建物登記申請書及登記清冊",
                    "賣方原土地及建物所有權狀正本",
                    "地方稅查欠戳記 (需蓋在公契正本上)",
                    "銀行貸款核准與抵押權設定契約文件",
                    "賣方原貸款之抵押權塗銷登記文件 (如債務清償證明書，若適用)",
                    "不動產成交實際資訊申報書 (實價登錄申報書，併同過戶送件)"
                ]
            }
        ]
    }
};

// State
let currentFlow = 'inheritance';
let activeStep = 1;
let cases = [];
let currentCaseId = '';

// DOM Selectors
const btnInheritance = document.getElementById('btn-inheritance');
const btnGift = document.getElementById('btn-gift');
const btnSale = document.getElementById('btn-sale');
const timelineContainer = document.getElementById('timeline-container');
const detailsSection = document.getElementById('details-section');

const stageTag = document.getElementById('stage-tag');
const detailsTitle = document.getElementById('details-title');
const metaTime = document.getElementById('meta-time');
const metaAgency = document.getElementById('meta-agency');
const detailsDesc = document.getElementById('details-desc');
const detailsDocs = document.getElementById('details-docs');
const detailsTips = document.getElementById('details-tips');

const checklistTitle = document.getElementById('checklist-title');
const checklistContainer = document.getElementById('checklist-container');
const progressPercent = document.getElementById('progress-percent');
const progressCount = document.getElementById('progress-count');
const progressBar = document.getElementById('progress-bar');

// New DOM Selectors for Case Management
const caseSelect = document.getElementById('case-select');
const caseSummaryType = document.getElementById('case-summary-type');
const caseSummaryProgress = document.getElementById('case-summary-progress');
const caseNotes = document.getElementById('case-notes');

const btnNewCase = document.getElementById('btn-new-case');
const btnDeleteCase = document.getElementById('btn-delete-case');
const btnPrintReport = document.getElementById('btn-print-report');

const newCaseModal = document.getElementById('new-case-modal');
const closeModalBtn = document.getElementById('close-modal-btn');
const newCaseName = document.getElementById('new-case-name');
const newCaseFlow = document.getElementById('new-case-flow');
const btnSaveNewCase = document.getElementById('btn-save-new-case');

// New DOM Selectors for Calculator
const calcWidget = document.getElementById('calc-widget');
const calcFab = document.getElementById('calc-fab');
const calcPanel = document.getElementById('calc-panel');
const closeCalcBtn = document.getElementById('close-calc-btn');
const calcValProperty = document.getElementById('calc-val-property');
const calcValContract = document.getElementById('calc-val-contract');
const calcCertificates = document.getElementById('calc-certificates');
const calcScrivenerFee = document.getElementById('calc-scrivener-fee');
const btnCalculateFees = document.getElementById('btn-calculate-fees');
const resRegFee = document.getElementById('res-reg-fee');
const resStampTax = document.getElementById('res-stamp-tax');
const resCertFee = document.getElementById('res-cert-fee');
const resScrivenerFee = document.getElementById('res-scrivener-fee');
const resTotalFee = document.getElementById('res-total-fee');
const btnApplyCalcToCase = document.getElementById('btn-apply-calc-to-case');

// Local Storage Core Functions
function loadCases() {
    const storedCases = localStorage.getItem('land_cases');
    const storedActiveId = localStorage.getItem('land_active_case_id');
    
    if (storedCases) {
        cases = JSON.parse(storedCases);
        currentCaseId = storedActiveId;
    }
    
    // Seed default case if empty or invalid
    if (cases.length === 0 || !cases.find(c => c.id === currentCaseId)) {
        const defaultCase = {
            id: 'case-' + Date.now(),
            name: '範例案件-張先生繼承登記案',
            flow: 'inheritance',
            activeStep: 1,
            checkedDocs: [],
            notes: '地政士備註範例：\n1. 被繼承人：張大明（115年5月1日死亡）\n2. 遺產範圍：信義區土地一筆，持分全。\n3. 繼承人：配偶張太太、長子張大華。長子預計繼承土地，須撰寫遺產分割協議書。\n4. 應特別注意拋棄繼承三個月時效（115年8月1日前）。'
        };
        cases = [defaultCase];
        currentCaseId = defaultCase.id;
        saveCases();
    }
    
    const activeCase = getActiveCase();
    currentFlow = activeCase.flow;
    activeStep = activeCase.activeStep || 1;
}

function saveCases() {
    localStorage.setItem('land_cases', JSON.stringify(cases));
    localStorage.setItem('land_active_case_id', currentCaseId);
}

function getActiveCase() {
    return cases.find(c => c.id === currentCaseId) || cases[0];
}

// Render Case Select Panel
function renderCaseSelect() {
    caseSelect.innerHTML = '';
    cases.forEach(c => {
        const opt = document.createElement('option');
        opt.value = c.id;
        opt.textContent = c.name;
        if (c.id === currentCaseId) {
            opt.selected = true;
        }
        caseSelect.appendChild(opt);
    });
    
    const activeCase = getActiveCase();
    const flowTypes = {
        inheritance: '👨‍👩‍👧‍👦 繼承登記',
        gift: '🎁 贈與移轉',
        sale: '🏠 買賣移轉'
    };
    caseSummaryType.textContent = flowTypes[activeCase.flow] || '-';
    caseNotes.value = activeCase.notes || '';
}

// Render Flow Steps Timeline
function renderTimeline() {
    timelineContainer.innerHTML = '';
    const steps = flowsData[currentFlow].steps;

    for (let stepId in steps) {
        const step = steps[stepId];
        const isActive = parseInt(stepId) === activeStep ? 'active' : '';

        const stepDiv = document.createElement('div');
        stepDiv.className = `flow-step ${isActive}`;
        stepDiv.setAttribute('data-step', stepId);
        stepDiv.innerHTML = `
            <div class="step-badge">${stepId}</div>
            <div class="step-content">
                <h3>${step.title.split('：')[0]}：${step.shortTitle}</h3>
                <p>${step.title.split('：')[1] || ''}</p>
            </div>
            <div class="step-chevron">›</div>
        `;

        stepDiv.addEventListener('click', () => {
            // Update active state
            document.querySelectorAll('.flow-step').forEach(s => s.classList.remove('active'));
            stepDiv.classList.add('active');
            activeStep = parseInt(stepId);
            
            // Save state to case
            const activeCase = getActiveCase();
            activeCase.activeStep = activeStep;
            saveCases();
            
            renderDetails(activeStep);
        });

        timelineContainer.appendChild(stepDiv);
    }
}

// Render selected step details
function renderDetails(stepId) {
    const step = flowsData[currentFlow].steps[stepId];
    if (!step) return;

    // Apply fade animation
    detailsSection.classList.remove('animate-fade');
    void detailsSection.offsetWidth; // Trigger reflow

    stageTag.textContent = `階段 ${stepId} / 6`;
    detailsTitle.textContent = step.title;
    metaTime.textContent = step.time;
    metaAgency.textContent = step.agency;
    detailsDesc.textContent = step.desc;
    detailsTips.textContent = step.tips;

    // Clear and render document list
    detailsDocs.innerHTML = '';
    step.docs.forEach(doc => {
        const li = document.createElement('li');
        li.textContent = doc;
        detailsDocs.appendChild(li);
    });

    detailsSection.classList.add('animate-fade');
}

// Render dynamic checklist
function renderChecklist() {
    checklistTitle.textContent = flowsData[currentFlow].title;
    checklistContainer.innerHTML = '';
    
    const checklistGroups = flowsData[currentFlow].checklist;
    let docIdCounter = 1;
    const activeCase = getActiveCase();

    checklistGroups.forEach(group => {
        const groupDiv = document.createElement('div');
        groupDiv.className = 'checklist-group';
        
        const h3 = document.createElement('h3');
        h3.textContent = group.group;
        groupDiv.appendChild(h3);

        group.items.forEach(item => {
            const label = document.createElement('label');
            label.className = 'checkbox-item';
            
            const input = document.createElement('input');
            input.type = 'checkbox';
            input.className = 'chk-doc';
            const docId = `${currentFlow}-doc-${docIdCounter}`;
            input.setAttribute('data-id', docId);
            docIdCounter++;

            // Load saved state
            if (activeCase.checkedDocs && activeCase.checkedDocs.includes(docId)) {
                input.checked = true;
            }

            input.addEventListener('change', () => {
                const activeCase = getActiveCase();
                const checkedList = activeCase.checkedDocs ? [...activeCase.checkedDocs] : [];
                
                if (input.checked) {
                    if (!checkedList.includes(docId)) {
                        checkedList.push(docId);
                    }
                } else {
                    const idx = checkedList.indexOf(docId);
                    if (idx > -1) {
                        checkedList.splice(idx, 1);
                    }
                }
                activeCase.checkedDocs = checkedList;
                saveCases();
                updateProgress();
            });

            const spanBox = document.createElement('span');
            spanBox.className = 'custom-checkbox';

            const spanText = document.createElement('span');
            spanText.className = 'checkbox-text';
            spanText.textContent = item;

            label.appendChild(input);
            label.appendChild(spanBox);
            label.appendChild(spanText);
            groupDiv.appendChild(label);
        });

        checklistContainer.appendChild(groupDiv);
    });

    // Reset progress details
    updateProgress();
}

// Update progress bar calculations
function updateProgress() {
    const checkboxes = document.querySelectorAll('.chk-doc');
    const total = checkboxes.length;
    let checkedCount = 0;

    checkboxes.forEach(chk => {
        if (chk.checked) checkedCount++;
    });

    const percent = total > 0 ? Math.round((checkedCount / total) * 100) : 0;

    progressPercent.textContent = `${percent}%`;
    progressCount.textContent = checkedCount;
    const progressTotal = document.getElementById('progress-total');
    if (progressTotal) progressTotal.textContent = total;
    progressBar.style.width = `${percent}%`;
    
    // Update dashboard summary progress
    caseSummaryProgress.textContent = `${percent}%`;
}

// Tab switcher callback
function switchFlow(flowName) {
    const activeCase = getActiveCase();
    if (activeCase.flow === flowName) return;

    // Change the flow type for the active case
    activeCase.flow = flowName;
    activeCase.activeStep = 1;
    activeCase.checkedDocs = []; // reset since checklist items changed

    currentFlow = flowName;
    activeStep = 1;

    saveCases();
    renderCaseSelect();
    updateTabUI();

    // Re-render components
    renderTimeline();
    renderDetails(activeStep);
    renderChecklist();
}

function updateTabUI() {
    btnInheritance.classList.remove('active');
    btnGift.classList.remove('active');
    btnSale.classList.remove('active');

    if (currentFlow === 'inheritance') {
        btnInheritance.classList.add('active');
    } else if (currentFlow === 'gift') {
        btnGift.classList.add('active');
    } else if (currentFlow === 'sale') {
        btnSale.classList.add('active');
    }
}

// Switcher button event listeners
btnInheritance.addEventListener('click', () => switchFlow('inheritance'));
btnGift.addEventListener('click', () => switchFlow('gift'));
btnSale.addEventListener('click', () => switchFlow('sale'));

// Case Management Event Listeners
caseSelect.addEventListener('change', () => {
    currentCaseId = caseSelect.value;
    const activeCase = getActiveCase();
    
    currentFlow = activeCase.flow;
    activeStep = activeCase.activeStep || 1;
    
    saveCases();
    renderCaseSelect();
    updateTabUI();
    renderTimeline();
    renderDetails(activeStep);
    renderChecklist();
});

caseNotes.addEventListener('input', () => {
    const activeCase = getActiveCase();
    activeCase.notes = caseNotes.value;
    saveCases();
});

btnNewCase.addEventListener('click', () => {
    newCaseName.value = '';
    newCaseModal.classList.add('show');
    newCaseName.focus();
});

closeModalBtn.addEventListener('click', () => {
    newCaseModal.classList.remove('show');
});

newCaseModal.addEventListener('click', (e) => {
    if (e.target === newCaseModal) {
        newCaseModal.classList.remove('show');
    }
});

btnSaveNewCase.addEventListener('click', () => {
    const name = newCaseName.value.trim() || '未命名案件-' + new Date().toLocaleDateString('zh-TW');
    const flow = newCaseFlow.value;
    
    const newCaseObj = {
        id: 'case-' + Date.now(),
        name: name,
        flow: flow,
        activeStep: 1,
        checkedDocs: [],
        notes: `案件名稱：${name}\n建立日期：${new Date().toLocaleDateString('zh-TW')}\n---\n在此輸入辦理詳情與客戶資訊...`
    };
    
    cases.push(newCaseObj);
    currentCaseId = newCaseObj.id;
    currentFlow = flow;
    activeStep = 1;
    
    saveCases();
    newCaseModal.classList.remove('show');
    
    renderCaseSelect();
    updateTabUI();
    renderTimeline();
    renderDetails(activeStep);
    renderChecklist();
});

btnDeleteCase.addEventListener('click', () => {
    const activeCase = getActiveCase();
    if (confirm(`確定要刪除「${activeCase.name}」嗎？此動作將會清除所有進度與備忘錄且無法復原。`)) {
        cases = cases.filter(c => c.id !== currentCaseId);
        
        if (cases.length === 0) {
            const defaultCase = {
                id: 'case-' + Date.now(),
                name: '預設辦理案件',
                flow: 'inheritance',
                activeStep: 1,
                checkedDocs: [],
                notes: ''
            };
            cases = [defaultCase];
            currentCaseId = defaultCase.id;
        } else {
            currentCaseId = cases[0].id;
        }
        
        const nextActive = getActiveCase();
        currentFlow = nextActive.flow;
        activeStep = nextActive.activeStep || 1;
        
        saveCases();
        renderCaseSelect();
        updateTabUI();
        renderTimeline();
        renderDetails(activeStep);
        renderChecklist();
    }
});

btnPrintReport.addEventListener('click', () => {
    window.print();
});

// Calculator Widgets Event Listeners
calcFab.addEventListener('click', () => {
    calcPanel.classList.toggle('show');
});

closeCalcBtn.addEventListener('click', () => {
    calcPanel.classList.remove('show');
});

btnCalculateFees.addEventListener('click', () => {
    const valProperty = parseFloat(calcValProperty.value) || 0;
    const valContract = parseFloat(calcValContract.value) || 0;
    const certCount = parseInt(calcCertificates.value) || 0;
    const scrivenerFee = parseFloat(calcScrivenerFee.value) || 0;
    
    // Calculations:
    const regFee = Math.floor(valProperty * 0.001); // 1‰
    const stampTax = Math.floor(valContract * 0.001); // 1‰
    const certFee = certCount * 80;
    const total = regFee + stampTax + certFee + scrivenerFee;
    
    resRegFee.textContent = `NT$ ${regFee.toLocaleString('zh-TW')}`;
    resStampTax.textContent = `NT$ ${stampTax.toLocaleString('zh-TW')}`;
    resCertFee.textContent = `NT$ ${certFee.toLocaleString('zh-TW')}`;
    resScrivenerFee.textContent = `NT$ ${scrivenerFee.toLocaleString('zh-TW')}`;
    resTotalFee.textContent = `NT$ ${total.toLocaleString('zh-TW')}`;
});

btnApplyCalcToCase.addEventListener('click', () => {
    const activeCase = getActiveCase();
    const regFee = resRegFee.textContent;
    const stampTax = resStampTax.textContent;
    const certFee = resCertFee.textContent;
    const scrivFee = resScrivenerFee.textContent;
    const total = resTotalFee.textContent;
    
    const propVal = parseFloat(calcValProperty.value) || 0;
    const contVal = parseFloat(calcValContract.value) || 0;
    
    const feeSummary = `
--- 💰 規費與印花稅試算明細 (${new Date().toLocaleDateString('zh-TW')}) ---
* 房屋評定值/申報地價總額：NT$ ${propVal.toLocaleString('zh-TW')}
* 契約金額（公契）：NT$ ${contVal.toLocaleString('zh-TW')}
1. 登記規費 (1‰)：${regFee}
2. 印花稅 (1‰)：${stampTax}
3. 書狀工本費 (每張80元)：${certFee}
4. 地政士代辦服務費：${scrivFee}
---------------------------------------------
預估費用總計：${total}`;
    
    caseNotes.value = (caseNotes.value + '\n' + feeSummary).trim();
    activeCase.notes = caseNotes.value;
    saveCases();
    
    alert('費用試算結果已成功導入備忘錄！');
    calcPanel.classList.remove('show');
});

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    loadCases();
    renderCaseSelect();
    updateTabUI();
    renderTimeline();
    renderDetails(activeStep);
    renderChecklist();
});

