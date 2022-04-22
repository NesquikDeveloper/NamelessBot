import { MessageReaction, User } from "discord.js";
import { Event } from "../handlers/EventHandler";
import ReactionRole from "../models/ReactionRole";

export default class InteractionCreate extends Event<"messageReactionAdd"> {
    public event = "messageReactionAdd";

    public async run(reaction: MessageReaction, user: User) {
        if (reaction.partial) reaction = await reaction.fetch();
        if (user.partial) user = await user.fetch();

        if (
            user.id !== this.client.user.id // Make sure the user is not the bot
            && reaction.emoji.name == "🗑️" // Make sure the reaction is the delete reaction
            && reaction.message.author?.id == this.client.user.id // Make sure the message is from the bot
            && reaction.users.cache.has(this.client.user.id) // Make sure the bot reacted on it, which indicates it can be deleted by the user
            && reaction.message.guild?.members.cache // Make sure the user has permission to delete messages
                .get(user.id)
                ?.permissions.has("MANAGE_MESSAGES")
        ) {
            reaction.message.delete();
        }

        /**
         * Reaction role logic
         */
        const reactionRole = await ReactionRole.findOne({
            where: {
                messageId: reaction.message.id,
                emoji:
                    reaction.emoji.id != null
                        ? reaction.emoji.id
                        : reaction.emoji.name,
            },
        });

        if (reactionRole) {
            // Get role
            const role = await reaction.message.guild?.roles.fetch(
                reactionRole.roleId
            );
            if (!role) {
                this.client.logger.error(
                    "Could not find role with id " + reactionRole.roleId
                );
                return;
            }

            // Check if member has role
            const member = reaction.message.guild?.members.cache.get(user.id);
            if (!member) {
                this.client.logger.warn(
                    "Could not find member with id " + user.id
                );
                return;
            }

            if (!member?.roles.cache.has(role.id)) await member.roles.add(role);
        }
    }
}
