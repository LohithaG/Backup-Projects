package com.mss.pmj.pmjmis.response;

import java.util.List;

public class PCSalesPersonWiseMarginsResponse {

	private List<String> timeLine;

	private TagSalePrice diamondTagPriceVSSalePrice;

	private TagSalePrice goldTagPriceVSSalePrice;

	public List<String> getTimeLine() {
		return timeLine;
	}

	public void setTimeLine(List<String> timeLine) {
		this.timeLine = timeLine;
	}

	public TagSalePrice getDiamondTagPriceVSSalePrice() {
		return diamondTagPriceVSSalePrice;
	}

	public void setDiamondTagPriceVSSalePrice(TagSalePrice diamondTagPriceVSSalePrice) {
		this.diamondTagPriceVSSalePrice = diamondTagPriceVSSalePrice;
	}

	public TagSalePrice getGoldTagPriceVSSalePrice() {
		return goldTagPriceVSSalePrice;
	}

	public void setGoldTagPriceVSSalePrice(TagSalePrice goldTagPriceVSSalePrice) {
		this.goldTagPriceVSSalePrice = goldTagPriceVSSalePrice;
	}

}
