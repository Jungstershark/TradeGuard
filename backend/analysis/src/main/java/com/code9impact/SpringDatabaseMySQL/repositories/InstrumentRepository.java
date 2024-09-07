package com.code9impact.SpringDatabaseMySQL.repositories;

import com.code9impact.SpringDatabaseMySQL.domains.Instrument;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface InstrumentRepository extends JpaRepository<Instrument, String> {

    Optional<Instrument> findById(String id);

    //    List<Instrument> findByInstrumentGroupAndInstrumentAndDepartmentAndRiskCountryAndExchangeAndTradeCCYAndSettlementCCY(
//            String instrumentGroup,
//            String instrument,
//            String department,
//            String riskCountry,
//            String exchange,
//            String tradeCCY,
//            String settlementCCY
//    );
    @Query("SELECT i FROM Instrument i WHERE " +
            "(:instrumentGroup IS NULL OR i.instrumentGroup = :instrumentGroup) AND " +
            "(:instrument IS NULL OR i.instrument = :instrument) AND " +
            "(:department IS NULL OR i.department = :department) AND " +
            "(:riskCountry IS NULL OR i.riskCountry = :riskCountry) AND " +
            "(:exchange IS NULL OR i.exchange = :exchange) AND " +
            "(:tradeCCY IS NULL OR i.tradeCCY = :tradeCCY) AND " +
            "(:settlementCCY IS NULL OR i.settlementCCY LIKE %:settlementCCY%)")
    List<Instrument> searchInstruments(
            @Param("instrumentGroup") String instrumentGroup,
            @Param("instrument") String instrument,
            @Param("department") String department,
            @Param("riskCountry") String riskCountry,
            @Param("exchange") String exchange,
            @Param("tradeCCY") String tradeCCY,
            @Param("settlementCCY") String settlementCCY);

    List<Instrument> findByInstrumentGroup(String instrumentGroup);

    List<Instrument> findByInstrumentIdIn(List<String> instrumentIds);

}
