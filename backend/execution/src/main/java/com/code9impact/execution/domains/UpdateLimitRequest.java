package com.code9impact.execution.domains;

// Uses DTO for the request body
public class UpdateLimitRequest {
    private String id;
    private Long amount;

    public UpdateLimitRequest(String id, Long amount) {
        this.id = id;
        this.amount = amount;
    }

    public UpdateLimitRequest() {}


    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Long getAmount() {
        return amount;
    }

    public void setAmount(Long amount) {
        this.amount = amount;
    }

}