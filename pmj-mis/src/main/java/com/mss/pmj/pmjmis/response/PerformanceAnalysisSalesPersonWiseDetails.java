package com.mss.pmj.pmjmis.response;

public class PerformanceAnalysisSalesPersonWiseDetails {

	private Achivements achivements;

	private Margins margins;

	private Conversion conversion;

	private TicketSize ticketSize;

	public Achivements getAchivements() {
		return achivements;
	}

	public void setAchivements(Achivements achivements) {
		this.achivements = achivements;
	}

	public Margins getMargins() {
		return margins;
	}

	public void setMargins(Margins margins) {
		this.margins = margins;
	}

	public Conversion getConversion() {
		return conversion;
	}

	public void setConversion(Conversion conversion) {
		this.conversion = conversion;
	}

	public TicketSize getTicketSize() {
		return ticketSize;
	}

	public void setTicketSize(TicketSize ticketSize) {
		this.ticketSize = ticketSize;
	}
}
