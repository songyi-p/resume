import React from "react";
import GridModal from "@/components/GridModal";

const Strength = () => {
    return (
        <GridModal title="# Strength" className="item-d bg-olive-green">
            <div className="w-full h-full p-4 grid grid-rows-3 grid-cols-3 gap-6 md:gap-2">
                <strong className="strength-title">
                    종합적인 판단력
                    <div>(Comprehensive Judgment)</div>
                </strong>
                <div className="strength-desc">
                    <div>상황을 결코 한 측면으로만 바라보지 않고, 다각도로 판단하고 이해합니다.</div>
                    <div>따라서 관계에 있어서는 청자가, 일에 있어서는 화자가 되는 편입니다.</div>
                </div>

                <div className="strength-desc items-end">
                    <div>각각의 포인트를 캐치해 완성도 있는 결과물을 만들어낼 수 있습니다.</div>
                    <div>이제는 완전한 신기술의 탄생보다</div>
                    <div>강점을 엮어 새로운 가치를 창출해 내는 만큼, 꼭 필요한 역량이라고 생각합니다.</div>
                </div>
                <strong className="strength-title">
                    조합 능력
                    <div>(Combination ability)</div>
                </strong>

                <strong className="strength-title">
                    팀 플레이어
                    <div>(Team-player)</div>
                </strong>
                <div className="strength-desc">
                    <div>독립적인 성향이지만, 팀 안에선 가치 있는 기여자가 되는 것을 희망합니다 🙋‍♀️</div>
                    <div>개인의 성과가 조직의 성과로 이어질 수 있는 방법에 대해 고민합니다.</div>
                </div>
            </div>
        </GridModal>
    )
}

export default Strength