import { expect, test } from "vitest";
import fightService from "../../services/fightService.js";

    test("should create a fight", async () => {
        const body = { player1: 1, player2: 2 };
        const fight = await fightService.fight(body);
        expect(fight).toHaveProperty("id");
        expect(fight).toHaveProperty("player1", 1);
        expect(fight).toHaveProperty("player2", 2);
        expect(fight).toHaveProperty("fightAt");
        expect(fight.fightAt).toBeInstanceOf(Date);
    });

    test("should return an error if player1 is missing", async () => {
        const body = { player2: 2 };
        const fight = await fightService.fight(body);
        expect(fight.error).toBe("User ID and opponent ID are required");
    });

    test("should return an error if player2 is missing", async () => {
        const body = { player1: 1 };
        const fight = await fightService.fight(body);
        expect(fight.error).toBe("User ID and opponent ID are required");
    });

    /*test("should return an error if fight creation fails", async () => {
        const body = { player1: 1, player2: 2 };
        const fight = await fightService.fight(body);
        expect(fight.error).toBe("Fight creation failed");
    });*/
    
    test("should find a fight by ID", async () => {
        const fight = await fightService.getFightById(1);
        expect(fight).toHaveProperty("id", 1);
        expect(fight).toHaveProperty("player1", 1);
        expect(fight).toHaveProperty("player2", 2);
    });

    test("should return an error if fight not found", async () => {
        const fight = await fightService.getFightById(999);
        expect(fight.error).toBe("Fight not found");
    });

    /*test("should find all fights", async () => {
        const fights = await fightService.getAllFights();
        expect(fights).toBeInstanceOf(Array);
    });*/

    test("should return an error if no fights found", async () => {
        const fights = await fightService.getAllFights();
        expect(fights.error).toBe("No fights found");
    });

    test("should find fights by player ID", async () => {
        const fights = await fightService.getFightsByPlayerId(1);
        expect(fights).toBeInstanceOf(Array);
        expect(fights.length).toBeGreaterThan(0);
        expect(fights[0]).toHaveProperty("player1", 1);
    });

    test("should return an error if no fights found for player", async () => {
        const fights = await fightService.getFightsByPlayerId(999);
        expect(fights.error).toBe("No fights found for this player");
    });

    test("should update a fight", async () => {
        const body = { winnerId: 2 };
        const fight = await fightService.updateFight(1, body);
        expect(fight).toHaveProperty("id", 1);
        expect(fight).toHaveProperty("winnerId", 2);
    });

    test("should return an error if winnerId is missing", async () => {
        const body = {};
        const fight = await fightService.updateFight(1, body);
        expect(fight.error).toBe("Winner ID is required");
    });

    /*test("should return an error if fight update fails", async () => {
        const body = {winnerId: 1024 };
        const fight = await fightService.updateFight(999, body);
        console.log("test",fight.error);
        expect(fight.error).toBe("Fight update failed");
    });

    test("should return an error if fight not found", async () => {
        const body = { winnerId: 999 };
        const fight = await fightService.updateFight(1, body);
        expect(fight.error).toBe("Fight update failed");
    });*/